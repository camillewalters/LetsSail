# Instructions for React <> Unity Communications

## Ingredients

1. Google Cloud CLI (https://cloud.google.com/sdk/docs/install)
1. WebGL on the Unity project (Unity Hub > Installs > right click on gear > Add Modules > WebGL Build Support > Install)
1. npm (https://nodejs.org/en/download/)
1. React (`npm i react`)
1. Chakra UI (`npm i @chakra-ui/react`, `npm i @chakra-ui/layout`, `npm i @chakra-ui/button`) (for development purposes, there may be other Chakra packages that I am forgetting here. Refer to the documentation to see which to install, and please keep this document up-to-date)
1. React router (`npm i --save react-router-dom`)
1. React Unity WebGL (`npm install react-unity-webgl`)
1. A text editor that can edit Javascript (or Notepad, I don't judge)

Adapted from https://react-unity-webgl.dev/docs/api/event-system

## Making a build for the purposes of WebGL

1. Change player settings (Build Settings > Player). Enable Decompression Fallback and Compression Format (right now I use GZip). 
1. Change Platform to Web in Build Settings.
1. Build it to a folder in `src`. The first time, this can take up to like 20 minutes, so be patient. 
1. Very important and easy to forget: Copy contents of Build Folder to `public/Build`. In the React script that initializes the Unity context, change URLs to match. (Don't mess with the file extensions or file path. This was non-trivial for me to figure out). 

## Sending data from React to Unity

This is pretty simple.

Use the React method `sendMessage({Name of Game Object that has the method to call},  {Name of method}, {Method Params})`. Note that you can only use ints out of the box here.
Eg., `const startRotation = () => {sendMessage('Cube', 'SetRotation', 1); // Start rotation};`

## Sending data from Unity to React

This is a bit more complicated. This approach uses callbacks.

1. To the file `Unity Project/LetsSail/Assets/Plugins/WebGL/React.jslib`, add a new method using `dispatchReactUnityEvent()` following the template there. Eg. `window.dispatchReactUnityEvent("NewScore", score);`, where NewScore is the callback name, and score is the parameter. 
1. Then, in the .cs script that will send the message, add a `private static extern void Method(int foo, string bar)` method declaration, with the `[DllImport("__Internal")]` attribute. This tells Unity to look for the method in the .jslib file.
1. Call the method in the .cs script with the `#if UNITY_WEBGL == true && UNITY_EDITOR == false` statement so that it isn't called from the Editor. (Don't forget to use `#endif`)
1. In React (the .js file), create a method that handles the Callback. For example, you can use UseState(), and useCallback() to use/change the value sent from the callback.
1. In React, use `addEventListener("Method Name", callbackHandler)` and `removeEventListener("Method Name", callbackHandler)`.
---------------------------------------------------------------------------------------------------------

# Instructions for deploying using GCP

Adapted from https://medium.com/@kroozrokh/step-by-step-guide-deploying-a-react-app-to-google-cloud-900d5b832cc7

1. Make sure Google Cloud SDK is [installed] (https://cloud.google.com/sdk/docs/install), and you have authenticated (if you haven't authenticated, run `gcloud auth login`). Log in using the Lets Sail credentials (linked in Slack)
1. Navigate to React App/letssail. Make sure you have a production build by running `npm run build` if you haven't already. 
1. Run `gcloud app deploy`. You might have to specify the project ID, which can be found under the ID column within the project dropdown (to the left of the searchbar in the Google Cloud console) by running `gcloud config set project project-name`
1. Go to the URL from the command line output to verify that it has deployed properly. Note that this will overwrite the bucket's contents. 

---------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Make changes in the src folder, not the build folder!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

