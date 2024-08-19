import * as React from 'react';
import {
    Container, Text, SimpleGrid, Box, chakra, Flex, Icon,
    useColorModeValue, Link, Grid
} from '@chakra-ui/react';
import { RiPagesFill } from "react-icons/ri";
import { FaLinkedin } from 'react-icons/fa';
import Camille from '../Images/camille.png';
import Priyanka from '../Images/priyanka.png';
import Kari from '../Images/kari.png';
import Chien from '../Images/chien.png';

interface StatData {
    label: string;
    score: string;
    icon: React.ReactElement;
    link: {
        href: string;
        title: string;
        icon: any;
    };
}

const statData: StatData[] = [
    {
        label: 'Product Manager / Designer / Game Writer',
        score: 'Kari Wu',
        icon: <img src={Kari} alt="Kari Headshot" style={{ width: '100%', height: 'auto', maxWidth: '120px', maxHeight: '160px' }} />,
        link: {
            href: 'https://www.kariwu.com/',
            title: 'Kari website',
            icon: RiPagesFill,
        }
    },
    {
        label: 'Unity Engineer',
        score: 'Priyanka Chandrashekar',
        icon: <img src={Priyanka} alt="Priyanka Headshot" style={{ width: '100%', height: 'auto', maxWidth: '130px', maxHeight: '160px' }} />,
        link: {
            href: 'https://www.linkedin.com/in/priyanka1706/',
            title: 'Priyanka linkedin',
            icon: FaLinkedin,
        }
    },
    {
        label: 'Unity / Fullstack Engineer',
        score: 'Camille Walters',
        icon: <img src={Camille} alt="Camille Headshot" style={{ width: '100%', height: 'auto', maxWidth: '130px', maxHeight: '160px' }} />,
        link: {
            href: 'https://camillewalters.ca/',
            title: 'Camille Website',
            icon: RiPagesFill,
        }
    },
    {
        label: '3D Artist',
        score: 'Chien Jarvis',
        icon: <img src={Chien} alt="Chien Headshot" style={{ width: '100%', height: 'auto', maxWidth: '130px', maxHeight: '160px' }} />,
        link: {
            href: 'https://www.linkedin.com/in/chienjarvis/',
            title: 'Chien Linkedin',
            icon: FaLinkedin,
        }
    },
];

const Team = () => {
    const textColor = useColorModeValue("gray.600", "gray.300");
    const tealColor = useColorModeValue("teal.600", "teal.500");

    return (
        <Container maxW="6.5xl" p={{ base: 2, sm: 4 }}>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
                <chakra.h1
                    fontSize="5xl"
                    lineHeight={1.2}
                    fontWeight="bold"
                    color={textColor}
                    mb={{ base: 0, md: 8 }}
                >
                    Our Team
                </chakra.h1>
                <Text fontSize="md" color={textColor} maxW="200px" mb={10} p="4">
                    We collaborated closely at every stage while taking ownership of our respective areas. If you have any feedback or are interested in collaborating, please feel free to reach out to us on LinkedIn.
                </Text>
                <SimpleGrid columns={4} spacing={3}>
                    {statData.map((data, index) => (
                        <Grid
                            key={index}
                            p={3}
                            border="1px solid"
                            borderColor={"#ffffff"}
                            borderRadius="md"
                            bg={"#FAFAFB"}
                            templateRows="repeat(4, auto)"
                            gap={2}
                            justifyItems="center"
                            alignItems="center"  
                        >
                            <Box gridRow={1} width="180px" height="160px" overflow="hidden" display="flex" alignItems="center" justifyContent="center">
                                {data.icon}
                            </Box>
                            <Text
                                fontSize="2xl"
                                fontWeight="bold"
                                color={textColor}
                                gridRow={2}
                                textAlign="center"
                            >
                                {data.score.split(' ').map((part, i) => (
                                    <div key={i}>{part}</div>
                                ))}
                            </Text>
                            <Text fontSize="md" color={tealColor} gridRow={3} textAlign="center">
                                {data.label}
                            </Text>
                            <Link href={data.link.href} color={tealColor} gridRow={4}>
                                <Icon as={data.link.icon} boxSize={6} />
                            </Link>
                        </Grid>
                    ))}
                </SimpleGrid>
            </Flex>
        </Container>
    );
};

export default Team;

