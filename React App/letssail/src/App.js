
//import React, { useState, useCallback, useEffect } from "react";
//import { Unity, useUnityContext } from "react-unity-webgl";
//import { ChakraProvider } from '@chakra-ui/react'
//import { Link } from 'react-router-dom';

//function App() {
//    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({

//        loaderUrl: '/Build/SimpleWater.loader.js',
//        dataUrl: '/Build/SimpleWater.data.unityweb',
//        frameworkUrl: '/Build/SimpleWater.framework.js.unityweb',
//        codeUrl: '/Build/SimpleWater.wasm.unityweb',
//    });
///*
//        loaderUrl: '/Build/OutlineCube.loader.js',
//        dataUrl: '/Build/OutlineCube.data.unityweb',
//        frameworkUrl: '/Build/OutlineCube.framework.js.unityweb',
//        codeUrl: 'Build/OutlineCube.wasm.unityweb',
//    });

//    /*

//    const startRotation = () => {
//        sendMessage('Cube', 'SetRotation', 1); // Start rotation
//    };

//    const stopRotation = () => {
//        sendMessage('Cube', 'SetRotation', 0); // Stop rotation
//    };

//    const [score, setScore] = useState();

//    const handleNewScore = useCallback((score) => {
//        setScore(score);
//    }, []);


//    useEffect(() => {
//        addEventListener("NewScore", handleNewScore);//"NewScore" is the name of the callback event in the Plugin/WebGL/React.jslib file
//        return () => {
//            removeEventListener("NewScore", handleNewScore);
//        };
//    }, [addEventListener, removeEventListener, handleNewScore]);
//    */

//      //return (
//    //    <div className="App">

//    //        <h1>Let's Sail!</h1>
//    //          <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
//    //          <div>
//    //                  <button onClick={startRotation}>Start Rotation</button>
//    //                  <button onClick={stopRotation}>Stop Rotation</button>
//    //          </div>
//    //          <div>
//    //              {<p>{`You've scored ${score} points.`}</p> }
//    //          </div>

//    //        </div>


//    //);


//    return (
//            <div className="App">

//                <h1>Let's Sail!</h1>
//                <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />

//            </div>

//    );
//}
//export default App;

import { Routes, Route, Outlet, Link as ReactRouterLink } from "react-router-dom";
import {
    Link as ChakraLink,
    LinkProps,
    ChakraProvider,
    Button,
    Stack,
    Text,
    Box,
    Tabs,
    TabList,
    TabPanel,
    Tab,
    TabIndicator,
    TabPanels,
    Grid,
    GridItem,
    extendTheme
} from '@chakra-ui/react'
import { Unity, useUnityContext } from "react-unity-webgl";
import React, { useState, useCallback, useEffect } from "react";


const theme = extendTheme({

})
export default function App() {
    return (
        <ChakraProvider>
           
        <div>
            <h1>Let's Sail</h1>

            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="level1" element={<Level1 />} />
                    <Route path="level2" element={<Level2 />} />
                    <Route path="level3" element={<Level3 />} />

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
            </div>


        </ChakraProvider>
    );
}

function Layout() {
    return (
        <div>
            <Tabs position='relative' variant='unstyled'>
                <TabList>
                    <Tab>
                        <ChakraLink as={ReactRouterLink} to="#about">Home</ChakraLink>
                    </Tab>
                    <Tab>About Us</Tab>
                    <Tab>Problems We Solve</Tab>
                    <Tab>LetsSail Game Levels</Tab>
                    <Tab>Testimonials</Tab>
                    <Tab>Contact</Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                <TabPanels>
                    <TabPanel id = "home">
                        <ChakraLink as={ReactRouterLink} to="/">Home</ChakraLink>
                    </TabPanel>
                    <TabPanel id = "about">
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel id="problems">
                        <p>three!</p>
                    </TabPanel>
                    <TabPanel id="game levels">
                        <p>four!</p>
                    </TabPanel>
                    <TabPanel id="testimonials">
                        <p>five!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>six!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <div>
                {/* A "layout route" is a good place to put markup you want to
                  share across all the pages on your site, like navigation. */}
                <nav>
                    <ul>
                        <li>
                            <ChakraLink as={ReactRouterLink} to="/">Home</ChakraLink>
                        </li>
                        <li>
                            <ChakraLink as={ReactRouterLink} to="/level1">Level 1</ChakraLink>
                        </li>
                        <li>
                            <ChakraLink as={ReactRouterLink} to="/level2">Level 2</ChakraLink>
                        </li>
                        <li>
                            <ChakraLink as={ReactRouterLink} to="/level3">Level 3</ChakraLink>
                        </li>
                        <li>
                            <ChakraLink as={ReactRouterLink} to="/nothing-here">Nothing Here</ChakraLink>
                        </li>
                    </ul>
                </nav>
                <hr />
                {/* An <Outlet> renders whatever child route is currently active,
                  so you can think about this <Outlet> as a placeholder for
                  the child routes we defined above. */}
                <Outlet />
            </div>
        </div>
    );
}

function Home() {
    return (
        <Stack
            width="1440px"
            height="4490px"
            maxWidth="100%"
            background="#FFFFFF"
            boxShadow="0px 3px 6px 0px rgba(18, 15, 40, 0.12)"
        >
            <Stack width="1440px" height="818px" maxWidth="100%" background="#FFFFFF">
                <Text
                    fontFamily="Manrope"
                    lineHeight="1.31"
                    fontWeight="bold"
                    fontSize="64px"
                    color="#171A1F"
                    width="620px"
                    maxWidth="100%"
                >
                    Learning and reviewing sailing knowledge is fun and easy
                </Text>
                <Text
                    fontFamily="Manrope"
                    lineHeight="1.56"
                    fontWeight="light"
                    fontSize="18px"
                    color="#6F7787"
                    width="485px"
                    maxWidth="100%"
                >
                    Letsail brings you the confidence on the water by our gamified learning
                    experience. The experience works on any browser, on both desktop and
                    mobile.
                </Text>
                
                <Stack
                    borderRadius="4px"
                    width="115px"
                    height="52px"
                    background="#002B6B"
                >
                    <Text
                        fontFamily="Manrope"
                        lineHeight="1.56"
                        fontWeight="regular"
                        fontSize="18px"
                        color="#FFFFFF"
                    >
                        Play Now
                    </Text>
                </Stack>
                <Box borderRadius="4px" width="648px" height="690px" maxWidth="100%" />
            </Stack>
        
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='blue.500' checkcheck/>
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
        </Stack>
    );
}

function Level1() {
    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({

        loaderUrl: '/Build/SimpleWater.loader.js',
        dataUrl: '/Build/SimpleWater.data.unityweb',
        frameworkUrl: '/Build/SimpleWater.framework.js.unityweb',
        codeUrl: '/Build/SimpleWater.wasm.unityweb',
    });

    const [conditionMet, setConditionMet] = useState(false);

    // Function to handle the condition
    const handleCondition = () => {
        setConditionMet(true);//this would be changed by the unity value being sent
    };
    return (
        <div>
            {/* Button to trigger the condition */}
            {!conditionMet && <Button colorScheme= 'yellow' onClick={handleCondition}>Check Condition</Button>}

            {/* Conditionally render the button based on the state */}
            {conditionMet && (
                <ChakraLink as={ReactRouterLink} to="/level2">
                    <Button> Go to Level 2 </Button>
                </ChakraLink>
            )}
        </div>
    );
}

function Level2() {
    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({

        loaderUrl: '/Build/SimpleWater.loader.js',
        dataUrl: '/Build/SimpleWater.data.unityweb',
        frameworkUrl: '/Build/SimpleWater.framework.js.unityweb',
        codeUrl: '/Build/SimpleWater.wasm.unityweb',
    });
    return (
        <div>
            <h2>Level 2</h2>
            <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
        </div>
    );
}

function Level3() {
    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({

        loaderUrl: '/Build/SimpleWater.loader.js',
        dataUrl: '/Build/SimpleWater.data.unityweb',
        frameworkUrl: '/Build/SimpleWater.framework.js.unityweb',
        codeUrl: '/Build/SimpleWater.wasm.unityweb',
    });
    return (
        <div>
            <h2>Level 3</h2>
            <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <ChakraLink as={ReactRouterLink} to="/">Go to the home page</ChakraLink>
            </p>
        </div>
    );
}