![IMG_9725](https://user-images.githubusercontent.com/30089055/199875237-07f734d0-4f60-4f9c-a66e-2e82a33aa410.png)
## React-native template 2022💿 💿 💿
This is a template that you can use to start a react-native project in 2022 with bottom navigation, lottie animations, and few other tools of the trade

## Base dependencies
- [axios](https://github.com/axios/axios) for networking.
- [lottie-react-native](https://github.com/lottie-react-native/lottie-react-native) an ecosystem of libraries for parsing Adobe After Effects animations exported as JSON
- [Munchkin](https://munchkinreact.app/) a react native component library
- [nativewind](https://www.nativewind.dev/) a universal style system
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) an icon library.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) to make redux implementation easier
- [redux-persist](https://github.com/rt2zz/redux-persist) for redux store persistance.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.




## Using Template 💻 💻 💻 💻 💻 
Run this command to create a new react-native project using the template
`npx react-native init {YOUR_APP_NAME} --template https://github.com/daboigbae/react-native-template`

** Make sure to replace {YOUR_APP_NAME} with the name you want to give your project

## Running Project🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 
##### iOS
Take the following steps to run the application locally for iOS
1. run `yarn install`
2. navigate to the iOS folder using a terminal `cd ios && pod install` 
3. run `yarn ios` at root

##### Android 
Take the following steps to run the application locally for iOS
1. run `yarn install`
2. run `yarn android`

If you run into any issues, please make sure your development environment is set-up with a fresh react native app.

If your android app runs, but it can't connect to the react native server
1. Open a new terminal and navigate to the project
2. Run `adb reverse tcp:8081 tcp:8081`
3. Run `yarn start`
4. Run `yarn android` 

## Screenshots
![landing-screen](https://user-images.githubusercontent.com/30089055/199877587-c013985c-0af0-46ef-a046-1bf6710e890e.png)
![home-screen](https://user-images.githubusercontent.com/30089055/199877794-a7ef761e-1d3a-41cd-9d2f-9a4d77ce9c51.png)




