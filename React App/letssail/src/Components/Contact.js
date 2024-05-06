import { Box, Text, Button, useColorModeValue, Center, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

const Contact = () => {

  return (
    <Box
      bg={useColorModeValue('teal.200', 'teal.900')}
      p={4}
      rounded="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Health Tip of the Day
      </Text>
      <Text fontSize="md" mb={4}>
        {"Test"}
      </Text>
      <Center>
        <Button
          colorScheme="teal"
          size="sm"
          //onClick={fetchHealthTip}
        >
          Get a New Tip
        </Button>
      </Center>
      <Center mt={4}>
        <Icon as={FaRegLightbulb} w={8} h={8} color="teal.500" />
        <Text fontSize="sm" color="teal.500">
          Daily Health Tips
        </Text>
      </Center>
    </Box>
  );
};

export default Contact;

