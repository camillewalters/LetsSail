
import React, { useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({
        loaderUrl: '/Build/SimpleWater.loader.js',
        dataUrl: '/Build/SimpleWater.data.unityweb',
        frameworkUrl: '/Build/SimpleWater.framework.js.unityweb',
        codeUrl: '/Build/SimpleWater.wasm.unityweb',
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
        <div className="App">

            <h1>Let's Sail!</h1>
            <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />

        </div>
    );
}
export default App;