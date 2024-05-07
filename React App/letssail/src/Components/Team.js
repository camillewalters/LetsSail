import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, Flex, Icon, useColorModeValue, Link } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { FaUsers, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { RiPagesFill } from "react-icons/ri";
import Camille from '../Images/camille.png';
import Priyanka from '../Images/priyanka.png';
import Kari from '../Images/kari.png';


interface StatData {
    label: string;
    score: string;
    icon: React.ReactElement;

}

const statData: StatData[] = [
    {
        label: 'Product Manager / Design & Art Enthusiast',
        score: 'Kari Wu',
        icon: <img src={Kari} alt="Kari Headshot" />,
        link: {
            href: 'https://www.kariwu.com/',
            title: 'Kari website',
            icon: RiPagesFill,
        }
    },
    {
        label: 'Unity Engineer',
        score: 'Priyanka Chandrashekar',
        icon: <img src={Priyanka} alt="Priyanka Headshot" />,
        link: {
            href: 'https://www.linkedin.com/in/priyanka1706/',
            title: 'Priyanka linkedin',
            icon: FaLinkedin,
        }
    },
    {
        label: 'Unity Engineer / Fullstack Enthusiast',
        score: 'Camille Walters',
        icon: <img src={Camille} alt="Camille Headshot" />,
        link: {
            href: 'https://camillewalters.ca/',
            title: 'Camille Website',
            icon: RiPagesFill,
        }
    },
];

const Team = () => {
    const textColor = useColorModeValue("gray.600", "gray.300");
    const tealColor = useColorModeValue("teal.600", "teal.500");

    return (
        <Container maxW="5xl" p={{ base: 4, sm: 10 }}>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
                <Stack spacing={1}>
                    <chakra.h1
                        fontSize="5xl"
                        lineHeight={1.2}
                        fontWeight="bold"
                        color={"textcolor.100"}
                    >
                        Our Team
                    </chakra.h1>
                    <Text fontSize="md" color={"textcolor.400"} maxW="400px">
                        We collaborated closely at every stage while taking ownership of our respective areas. If you have any feedback or are interested in collaborating, please feel free to reach out to us on LinkedIn.
                    </Text>
                </Stack>
                <SimpleGrid columns={3} spacing={6} pt={8} pl={{ base: 0, md: 10 }}>
                    {statData.map((data, index) => (
                        <Stack
                            key={index}
                            p={4}
                            border="1px solid"
                            borderColor={"#ffffff"}
                            borderRadius="md"
                            align="center"
                            spacing={1}
                            bg={"#FAFAFB"}
                        >
                            <Box fontSize="lg" color={tealColor}>
                                {data.icon}
                            </Box>
                            <Box fontSize="2xl" fontWeight="bold" color={textColor} align="center">
                                {data.score}
                            </Box>
                            
                            <Text fontSize="md" color={"custom.200"} align="center">
                                {data.label}
                            </Text>
                            <Stack fontSize="lg" color={tealColor}>
                            <Link
              href={data.link.href}
              key={data.link.title}
              color={'gray.700'}
            >
              <Icon as={data.link.icon} boxSize={6} />
            </Link>
                            </Stack>
                        </Stack>
                    ))}
                </SimpleGrid>
            </Flex>
        </Container>
    );
};

export default Team;

