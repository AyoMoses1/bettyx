import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { AxiosError, AxiosResponse } from 'axios';
import { useToast } from '@chakra-ui/react';


export const useGetAllAgentsWithPlayers = () => {
  return useQuery(['allPlayers'], () =>
    Services.getAllAgentsWithPlayers()
  );
};