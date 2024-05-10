
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
import Team from "./Components/Team";
import Experience from "./Components/GameExperience";
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
            <Outlet />
        </div>
    );
}

function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Features />
            <div id="Experience">
                <Experience />
            </div>
            {/*<div id="Testimonials">*/}
            {/*    <Testimonials />*/}
            {/*</div>*/}
            <div id="Team">
                <Team />
            </div>
            <div id="Contact">
            <   Contact />
            </div>
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