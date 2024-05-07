import React from 'react';
import {
  Container,
  Box,
  chakra,
  Flex,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';

interface TestimonialAttributes {
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    name: 'Amanda Johnson',
    position: 'Orthopedic Surgeon',
    company: 'Bone Health Clinic',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: `I've been practicing medicine for years, and I must say that the level of expertise and care provided at this clinic is exceptional. The team here is dedicated to improving patients' lives through effective treatments and compassionate care.`
  },
  {
    name: 'Sophia Nguyen',
    position: 'Dermatologist',
    company: 'SkinCare Clinic',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `As a dermatologist, I'm proud to be associated with this clinic. The advanced techniques and personalized treatments offered here have made a significant impact on our patients' skin health and confidence. It's truly rewarding to see the positive transformations.`
  },
  {
    name: 'Michael Patel',
    position: 'Gastroenterologist',
    company: 'Digestive Wellness Center',
    image: 'https://images.pexels.com/photos/2770600/pexels-photo-2770600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `Patients come to us seeking relief from gastrointestinal issues, and I'm proud to be part of a team that delivers exceptional care. The comprehensive approach to diagnosis and treatment ensures that our patients receive the best possible outcomes.`
  },
  {
    name: 'Emily Turner',
    position: 'Family Physician',
    company: 'Healthy Life Clinic',
    image: 'https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `Promoting the health and well-being of families is my passion. At this clinic, we provide comprehensive healthcare services that focus on preventive care and maintaining a healthy lifestyle. It's a privilege to be a part of our patients' wellness journeys.`
  }
];

const Testimonials = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('#eff5f1', '#252d3a');
  const blurBgColor = useColorModeValue('custom.300', 'gray.600');

  return (
    <Container maxW="5xl" p={6}>
      <Flex justify="center" mb={8} direction="column" alignItems="center">
        <chakra.h2 fontSize="3xl" fontWeight="bold" mb={2} color="textcolor.100">
          Testimonials
        </chakra.h2>
        
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={8} mt={12} mb={8}>
        {testimonials.map((obj, index) => (
          <Stack key={index} direction="column" mb={5} spacing={0} alignItems="center">
            <Stack
              maxW="345px"
              spacing={5}
              mb={10}
              boxShadow="lg"
              rounded="md"
              p={6}
              pos="relative"
              bg={bgColor}
              transform="rotate(-4deg)"
              _after={{
                content: `""`,
                borderColor: `${borderColor} transparent`,
                borderStyle: 'solid',
                borderWidth: '25px 30px 0 0',
                position: 'absolute',
                bottom: '-25px',
                left: '40px',
                display: 'block'
              }}
            >
              <Box
                position="relative"
                rounded="md"
                transform="rotate(4deg)"
                _before={{
                  content: '""',
                  bg: blurBgColor,
                  filter: 'blur(55px)',
                  position: 'absolute',
                  top: '-0.15rem',
                  right: '-0.15rem',
                  bottom: '-0.15rem',
                  left: '-0.15rem',
                  borderRadius: '5px'
                }}
              >
                <chakra.p position="relative" fontSize="lg">{obj.content}</chakra.p>
              </Box>
            </Stack>
            <Stack spacing={1} p={2} justify="center" alignItems="center">
              <Avatar
                size="xl"
                name={obj.name}
                src={obj.image}
              />
              <Box textAlign="center">
                <Text fontWeight="bold" fontSize="xl">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="md" color="teal.500">
                  {obj.position}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {obj.company}
                </Text>
              </Box>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Testimonials;

