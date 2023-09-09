import {
  Avatar,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  HStack,
  Button,
  Flex,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { wagerData } from './data';
import WagerHeader from './WagerHeader';

const ParlayGrid = ({ data, stake }) => {
  const toWin = data.odd * stake - stake;
  return (
    <Accordion allowToggle p={0}>
      <AccordionItem>
        <h2>
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            bg="blue"
            color="white"
            _hover={{ background: 'blue' }}
          >
            <Box>
              <Text variant="nav">ENGLISH PREMIER LEAGUE</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <Flex my={2} justifyContent="space-between" width="100%">
          <HStack>
            {data?.prediction !== 'draw' && (
              <Avatar
                src={`https://assets.b365api.com/images/team/m/${data?.predictedLogo}.png`}
                size="sm"
              />
            )}
            <Text>
              {data?.prediction === 'home'
                ? data.home
                : data?.prediction === 'away'
                ? data.away
                : `Draw(${data?.home} vs ${data?.away})`}
            </Text>
          </HStack>

          <Input
            type="text"
            value={data?.label}
            sx={{ borderRadius: '0px', width: '100px' }}
          />
        </Flex>
        <AccordionPanel pb={4} px={0}>
          {wagerData?.map((item) => (
            <StyledText>
              <StyledSpan>{item?.title} :</StyledSpan>
              {`${item?.value} PST`}
            </StyledText>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const StyledSpan = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledText = styled(Text)`
  font-size: 12px !important;
  text-transform: uppercase;import wagerHeader from './WagerHeader';

`;

export default ParlayGrid;