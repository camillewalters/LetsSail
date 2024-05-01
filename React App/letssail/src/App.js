
import React, { useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { ChakraProvider } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function App() {
    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({

        loaderUrl: '/Build/SimpleWater.loader.js',
        dataUrl: '/Build/SimpleWater.data.unityweb',
        frameworkUrl: '/Build/SimpleWater.framework.js.unityweb',
        codeUrl: '/Build/SimpleWater.wasm.unityweb',
    });
/*
        loaderUrl: '/Build/OutlineCube.loader.js',
        dataUrl: '/Build/OutlineCube.data.unityweb',
        frameworkUrl: '/Build/OutlineCube.framework.js.unityweb',
        codeUrl: 'Build/OutlineCube.wasm.unityweb',
    });

    /*

    const startRotation = () => {
        sendMessage('Cube', 'SetRotation', 1); // Start rotation
    };

    const stopRotation = () => {
        sendMessage('Cube', 'SetRotation', 0); // Stop rotation
    };

    const [score, setScore] = useState();

    const handleNewScore = useCallback((score) => {
        setScore(score);
    }, []);


    useEffect(() => {
        addEventListener("NewScore", handleNewScore);//"NewScore" is the name of the callback event in the Plugin/WebGL/React.jslib file
        return () => {
            removeEventListener("NewScore", handleNewScore);
        };
    }, [addEventListener, removeEventListener, handleNewScore]);
    */

      //return (
    //    <div className="App">

    //        <h1>Let's Sail!</h1>
    //          <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
    //          <div>
    //                  <button onClick={startRotation}>Start Rotation</button>
    //                  <button onClick={stopRotation}>Stop Rotation</button>
    //          </div>
    //          <div>
    //              {<p>{`You've scored ${score} points.`}</p> }
    //          </div>

    //        </div>


    //);


    return (
        <ChakraProvider>
            <div className="App">

                <h1>Let's Sail!</h1>
                <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />

            </div>

        </ChakraProvider>
    );
}
export default App;

//    // Define state to track whether the condition is met
//    const [conditionMet, setConditionMet] = useState(false);

//    // Function to handle the condition
//    const handleCondition = () => {
//        // Logic to determine if the condition is met
//        // For example, checking if a certain variable is true
//        // In this example, I'm setting it to true when the button is clicked
//        setConditionMet(true);
//    };

//    return (
//        <div>
//            {/* Button to trigger the condition */}
//            <button onClick={handleCondition}>Check Condition</button>

//            {/* Conditionally render the button based on the state */}
//            {conditionMet && (
//                <Link to="/next-page">
//                    <button>Go to Next Page</button>
//                </Link>
//            )}
//        </div>
//    );
//}

//export default App;