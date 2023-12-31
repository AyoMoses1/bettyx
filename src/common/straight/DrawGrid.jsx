import { Grid, GridItem, HStack, Avatar, Text, Box } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import BetForm from './BetForm';
import DrawForm from './DrawForm';
const DrawGrid = ({ odd, eventData, prediction, home, away, gameInfo }) => {
  return (
    <Box mt={4} bg="grey" p={2}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1}>
          <HStack>
            <FaTimes />
            <Text>Draw</Text>
          </HStack>
        </GridItem>
        <DrawForm
          odd={odd}
          eventData={eventData}
          prediction={prediction}
          home={home}
          away={away}
          gameInfo={gameInfo}
        />
      </Grid>
    </Box>
  );
};

export default DrawGrid;
