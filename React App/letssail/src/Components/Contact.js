import { Container, Box, chakra, Text, Icon, SimpleGrid, useColorModeValue, Button, Link, Flex } from '@chakra-ui/react';
import { MdEventAvailable, MdAssignment, MdLocalHospital, MdLibraryBooks, MdOutlineSailing } from 'react-icons/md';
import { GiShieldEchoes, GiBookmarklet } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Contact = () => {
    const headingColor = useColorModeValue("textcolor.100", "teal.200");
    const textColor = useColorModeValue("textcolor.100", "gray.300");
    const iconColor = useColorModeValue("custom.200", "teal.400");
    const titleSize = "5xl";
    const contentSize = "md";
    const tealColor = useColorModeValue("teal.600", "teal.500");

    return (
        <Box py={{ base: 8, md: 16 }}>
            <Container maxW="6xl" p={{ base: 5, md: 5 }} justify="center">
                <chakra.h1 fontSize={titleSize} fontWeight="bold" mb={3} textAlign="center" color={headingColor}>
                    Special Thanks
                </chakra.h1>
                <chakra.p fontSize="lg" color={"textcolor.400"} mb={8} textAlign="left">
                    We also want to give our special thanks to many other people who helped us with this project, including: 
                    <Link color={tealColor} href='https://www.linkedin.com/in/brandonwan/' isExternal> Brandon Wan</Link> (Subject Matter Expert), 
                    <Link color={tealColor} href='https://www.linkedin.com/in/jessica-tc-lee/' isExternal> Jessica Lee</Link> (Product Designer), 
                    <Link color={tealColor} href='https://www.linkedin.com/in/serhii-kyryliuk' isExternal> Serhii Kyryliuk</Link> (Product Designer), 
                    <Link color={tealColor} href='https://www.linkedin.com/in/shih-tsui-ariel-kuo-34721393/' isExternal> Ariel Kuo</Link> (Engineer and 3D Artist), and 
                    <Link color={tealColor} href='https://www.linkedin.com/in/doug-bruvall-8a75912a9/' isExternal> Doug Bruvall</Link> (Engineer).
                </chakra.p>

                <chakra.h1 fontSize={titleSize} fontWeight="bold" mb={3} textAlign="center" color={headingColor}>
                    Check out our work
                </chakra.h1>
                <chakra.p fontSize="lg" color={"textcolor.400"} mb={8} textAlign="left">
                    While exploring our next career opportunities, we collaborated on this project to acquire new skills and refine our existing ones. We prioritized our learning objectives while carefully considering user needs. From day one, we chose to make the project open source, and we've received substantial support from our network. Visit our GitHub page to learn more about the project and its credits.
                </chakra.p>
                <Flex justify="center">
                    <Button
                        rounded={'full'}
                        size={'lg'}
                        fontWeight={'normal'}
                        px={6}
                        colorScheme={'teal'}
                        bg={'custom.100'}
                        _hover={{ bg: 'custom.300' }}
                    >
                        <Link href='https://github.com/camillewalters/LetsSail' isExternal>
                            LetsSail Github
                        </Link>
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
};

export default Contact;
