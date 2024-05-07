
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


//---------------------------------------------------------------------------------------------------------//

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
} from '@chakra-ui/react';
import { Unity, useUnityContext } from "react-unity-webgl";
import React, { useState, useCallback, useEffect } from "react";
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Level1 from "./LevelPages/Level1";
import Level2 from "./LevelPages/Level2";
import Level3 from "./LevelPages/Level3";
import Theme from "./theme";


export default function App() {
    return (
        <ChakraProvider theme={Theme}>
           
        <div>
           

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
            <div>
                {/* A "layout route" is a good place to put markup you want to*/}{/*
                */}{/*  share across all the pages on your site, like navigation. */}
                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <ChakraLink as={ReactRouterLink} to="/">Home</ChakraLink>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <ChakraLink as={ReactRouterLink} to="/level1">Level 1</ChakraLink>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <ChakraLink as={ReactRouterLink} to="/level2">Level 2</ChakraLink>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <ChakraLink as={ReactRouterLink} to="/level3">Level 3</ChakraLink>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <ChakraLink as={ReactRouterLink} to="/nothing-here">Nothing Here</ChakraLink>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
                {/*<hr />*/}
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
        <div>
            <NavBar />
            <Hero />
            <Features />
            <Testimonials />
            <Contact />
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