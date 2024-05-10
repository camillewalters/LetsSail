import { Container, Box, chakra, Text, Icon, SimpleGrid, useColorModeValue, Button, Link, Flex } from '@chakra-ui/react';
import { MdEventAvailable, MdAssignment, MdLocalHospital, MdLibraryBooks, MdOutlineSailing } from 'react-icons/md';
import { GiShieldEchoes, GiBookmarklet } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { FaHandPointer } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";

interface IFeature {
  heading: string;
  content: string;
  icon: React.ElementType;
}

const features: IFeature[] = [
  {
    heading: 'Gamified Experience',
    content:
            'Play as you learn. No textbook reading for the hobby you do during your downtime.',
        icon: FaGamepad,
  },
  {
    heading: 'Interactive Learning',
      content: 'Interact with the virtual world and characters. Sustain the memory better.',
      icon: FaHandPointer,
  },
  {
    heading: 'Risk-free Practice',
    content:
          'Practice with no concern of making mistakes. Build up the repetition fast.',
      icon: AiFillSafetyCertificate,
  },
];

const Features = () => {
 const headingColor = useColorModeValue("textcolor.100", "teal.200");
 const textColor = useColorModeValue("textcolor.100", "gray.300");
  const iconColor = useColorModeValue("custom.200", "teal.400");
  const titleSize = "4xl";
  const contentSize = "md";

  return (
    <Box py={{ base: 8, md: 16 }}>
          <Container maxW="6xl" p={{ base: 5, md: 10 }} justify="center">

        <chakra.p fontSize="md" color={"custom.400"} mb={8} textAlign="center">
         Built for beginner sailors
        </chakra.p>
        <chakra.h3 fontSize={titleSize} fontWeight="bold" mb={3} textAlign="center" color={headingColor}>
          Why LetsSail
        </chakra.h3>
        <SimpleGrid columns={{ base: 1, md: 3 }} placeItems="center" spacing={16} mt={4} mb={8}>
          {features.map((feature, index) => (
            <Box key={index} textAlign="center">
              <Icon as={feature.icon} w={20} h={20} color={iconColor} />
              <chakra.h3 fontWeight="semibold" fontSize="2xl">
                {feature.heading}
              </chakra.h3>
              <Text fontSize={contentSize} color={textColor}>{feature.content}</Text>
            </Box>
          ))}
              </SimpleGrid>
              <Flex justify = "center">
              <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  border='2px'
                  px={6}
                  borderColor = 'custom.400'
                  bg = {'white'}
                  _hover={{ bg: 'custom.200' }}
                  variant='outline'
              >
                  <Link href='https://flat-clavicle-f6a.notion.site/PRD-WIP-d6f7b3d4df9547d7b056478a22094d9a' textColor = 'custom.400'>
                      Learn more about beginner sailors
                  </Link>
              </Button>
              </Flex>
      </Container>
    </Box>
  );
};

export default Features;

