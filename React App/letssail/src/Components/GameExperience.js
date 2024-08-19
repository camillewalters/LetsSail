import { Container, Box, chakra, Text, Icon, SimpleGrid, useColorModeValue, Button, Link, Flex, Stack, Image, Heading } from '@chakra-ui/react';
import WomanSailing from '../Images/womanSailing.jpg';
import { MdOutlineFilter1, MdOutlineFilter2, MdOutlineFilter3, MdOutlineFilter4 } from "react-icons/md";
import letssail from '../Images/letssail.png';

const Experience = () => {
    const headingColor = useColorModeValue("textcolor.100", "teal.200");
    const textColor = useColorModeValue("textcolor.100", "gray.300");
    const iconColor = useColorModeValue("custom.200", "teal.400");
    const titleSize = "4xl";
    const contentSize = "md";
    const tealColor = useColorModeValue("teal.600", "teal.500");

    interface StatData {
        label: string;
        score: string;
        icon: React.ReactElement;
    }

    const statData: StatData[] = [
        {
            label: 'Learn what sailors mean by hull, bow, stern, port, starboard, and cockpit.',
            score: 'Basic',
            icon: <MdOutlineFilter1 size={40} />,
        },
        {
            label: 'Learn what sailors mean by keel, rudder, tiller, mast, winch, and boom.',
            score: 'Boat Parts',
            icon: <MdOutlineFilter2 size={40} />,
        },
        {
            label: 'Learn what sailors mean by mainsail, jib, mainsheet, jibsheet, spreader, backstay, and shroud.',
            score: 'Rigging',
            icon: <MdOutlineFilter3 size={40} />,
        },
        {
            label: 'Build on the knowledge from previous levels and begin to take control of the boat.',
            score: 'Control (coming soon!)',
            icon: <MdOutlineFilter4 size={40} />,
        },
    ];
    return (
        <Box py={{ base: 8, md: 16 }}>
            <Container maxW="4xl" p={{ base: 1, md: 10 }} justify="center">

                <chakra.p fontSize="md" color={"custom.400"} mb={8} textAlign="center">
                    Built with a storyline in mind
                </chakra.p>
                <chakra.h3 fontSize={titleSize} fontWeight="bold" mb={3} textAlign="center" color={headingColor}>
                    LetsSail Experience
                </chakra.h3>
                <chakra.p fontSize="lg" color={"gray.500"} mb={8} textAlign="center">
                    We've heard from beginner sailors about how overwhelming sailing can seem at first; even mastering basic terminology can take longer than anticipated. To make learning more enjoyable, we've crafted a narrative that enriches the experience.
                </chakra.p>
            </Container>

            <Container maxW={'6xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 1 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        >
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    zIndex: -1,
                                }}
                            >
                                Where It Begins
                            </Text>
                            <br />
                        </Heading>
                        <Text color={'gray.500'} fontSize="lg">
                            The game begins when player finds that a storm has pushed their sailboat to a remote island. By following the skipper's guidance, the player will identify each component of the boat and begin sailing once it's confirmed that everything is intact.
                        </Text>
                       
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={{ base: '200px', md: '350px', lg: '450px' }}
                            rounded={'lg'}
                            boxShadow={'2xl'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={
                                    letssail
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
                    <Stack spacing={4}>
                        <chakra.h1
                            fontSize="5xl"
                            lineHeight={1.2}
                            fontWeight="bold"
                            color={"textcolor.100"}
                        >
                            Game Levels
                        </chakra.h1>
                        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={'teal'}
                                bg={'custom.100'}
                                _hover={{ bg: 'custom.300' }}
                            >
                                <Link href='/level1'>
                                    Play Now
                                </Link>
                            </Button>
                        </Stack>
                        
                    </Stack>
                    <SimpleGrid columns={2} spacing={6} pt={8} pl={{ base: 0, md: 10 }}>
                        {statData.map((data, index) => (
                            <Stack
                                key={index}
                                p={4}
                                border="1px solid"
                                borderColor={"custom.400"}
                                borderRadius="md"
                                align="center"
                                spacing={1}
                                bg={"white"}
                            >
                                <Box fontSize="2xl" color={"custom.400"}>
                                    {data.icon}
                                </Box>
                                <Box fontSize="2xl"  color={textColor} textAlign = "left">
                                    {data.score}
                                </Box>
                                
                                <Text fontSize="md" color={'gray.500'} align = "left">
                                    {data.label}
                                </Text>
                            </Stack>
                        ))}
                    </SimpleGrid>
                </Flex>
            </Container>
        </Box>

    );
};

export default Experience;