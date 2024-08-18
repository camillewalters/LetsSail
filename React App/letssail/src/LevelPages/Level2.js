
import { Unity, useUnityContext } from "react-unity-webgl";
import React, { useState, useCallback, useEffect } from "react";
import { Container, VStack, Button, Link as ChakraLink, Flex } from '@chakra-ui/react';
import { Link as ReactRouterLink } from "react-router-dom";
import NavBar from '../Components/NavBar';

function Level2() {
    const { unityProvider, sendMessage, addEventListener, removeEventListener, requestFullscreen, isLoaded } = useUnityContext({

        loaderUrl: '/Build/Level2.loader.js',
        dataUrl: '/Build/Level2.data.unityweb',
        frameworkUrl: '/Build/Level2.framework.js.unityweb',
        codeUrl: '/Build/Level2.wasm.unityweb',
    });

    const [levelComplete, setLevelComplete] = useState(false);

    const handleLevelComplete = useCallback((score) => {
        setLevelComplete(score);
    }, []);


    useEffect(() => {
        addEventListener("LevelComplete", handleLevelComplete);//"Level Complete" is the name of the callback event in the Plugin/WebGL/React.jslib file
        return () => {
            removeEventListener("LevelComplete", handleLevelComplete);
        };
    }, [addEventListener, removeEventListener, handleLevelComplete]);


    // Function to handle the condition
    const handleCondition = () => {
        setLevelComplete(true);//this would be changed by the unity value being sent
    };

    return (
        <div>
            <NavBar />
            <Container maxW="3xl" mt={10} mb={10} centerContent>
                <VStack spacing={10} align="stretch">
                    <Unity unityProvider={unityProvider} style={{ width: (window.innerWidth * 0.8), height: (window.innerHeight * 0.8), visibility: isLoaded ? "visible" : "hidden" }} />

                    {/*Button to trigger the condition, this should remain commented unless you want to trigger manually*/}
                    {/*{!levelComplete && <Button colorScheme='yellow' onClick={handleCondition}>Trigger Level Complete</Button>}*/}

                    <Flex justify="center">
                        {/*Conditionally render the button based on the state */}
                        {levelComplete && (
                            <ChakraLink as={ReactRouterLink} to="/level2">
                                <Button colorScheme='yellow' size='lg'> Go to Level 2 </Button>
                            </ChakraLink>
                        )}
                    </Flex>
                </VStack>
                <ChakraLink color='textcolor.500' href='https://github.com/camillewalters/LetsSail' isExternal>
                    Click to visit our GitHub page to learn more about the project and its credits.
                </ChakraLink>
            </Container>
        </div>
    );
}

export default Level2;