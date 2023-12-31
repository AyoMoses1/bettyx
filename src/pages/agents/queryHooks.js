import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { AxiosError, AxiosResponse } from 'axios';
import { Box, useToast } from '@chakra-ui/react';

export const useGetAllAgents = () => {
  return useQuery(['allAgents'], () => Services.getAllAgents());
};

export const useCreateAgent = () => {
  const toast = useToast();

  return useMutation(Services.createAgent, {
    onError: (data) => {
      const errObj = data.response;
      toast({
        title: 'Error',
        description: errObj?.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
    },
    onSuccess: (data) => {
      toast({
        position: 'bottom-left',
        render: () => (
          <Box
            position="relative"
            bgColor="green"
            color="white"
            borderRadius="lg"
            p={3}
            maxWidth="300px"
          >
            <Box fontWeight="bold" fontSize="lg" marginBottom="2">
              Agent Account Created Successfully!
            </Box>
          </Box>
        ),
      });
    },
  });
};
