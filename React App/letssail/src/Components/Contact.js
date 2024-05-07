import { Box, Text, Button, useColorModeValue, Center, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import {MdOutlineSailing } from 'react-icons/md';

const Contact = () => {

  return (
    <Box
      bg={useColorModeValue('custom.300', 'teal.900')}
      p={4}
      rounded="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Check out our work
      </Text>
      <Text fontSize="md" mb={4}>
              {"While exploring our next career opportunities, we collaborated on this project to acquire new skills and refine our existing ones. We prioritized our learning objectives while carefully considering user needs. From day one, we chose to make the project open source, and we've received substantial support from our network. Visit our GitHub page to discover more."}
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
              <Icon as={MdOutlineSailing} w={8} h={8} color="custom.100" />
              <Text fontSize="sm" color="custom.100">
          LetsSail
        </Text>
      </Center>
    </Box>
  );
};

export default Contact;

