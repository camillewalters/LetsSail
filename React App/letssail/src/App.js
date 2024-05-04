
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

import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import React, { useState, useCallback, useEffect } from "react";

export default function App() {
    return (
        <div>
            <h1>Let's Sail</h1>

            <p>
                This example demonstrates some of the core features of React Router
                including nested <code>&lt;Route&gt;</code>s,{" "}
                <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
                "*" route (aka "splat route") to render a "not found" page when someone
                visits an unrecognized URL.
            </p>

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
    );
}

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/level1">Level 1</Link>
                    </li>
                    <li>
                        <Link to="/level2">Level 2</Link>
                    </li>
                    <li>
                        <Link to="/level3">Level 3</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

function Home() {
    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({

        loaderUrl: '/Build/SimpleWater.loader.js',
        dataUrl: '/Build/SimpleWater.data.unityweb',
        frameworkUrl: '/Build/SimpleWater.framework.js.unityweb',
        codeUrl: '/Build/SimpleWater.wasm.unityweb',
    });
    return (
        <div>
            <h2>Level 1</h2>
            <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
        </div>
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
        setConditionMet(true);//this would be changed by the unity value
    };
    return (
        <div>
            {/* Button to trigger the condition */}
            {!conditionMet && <button onClick={handleCondition}>Check Condition</button>}

            {/* Conditionally render the button based on the state */}
            {conditionMet && (
                <Link to="/dashboard">
                    <button>Go to Next Page</button>
                </Link>
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
            <h2>Level 3</h2>
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
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}