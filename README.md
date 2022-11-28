# 📱Basic `React Native Template`
<p align="center">
<img src="https://user-images.githubusercontent.com/30089055/199875237-07f734d0-4f60-4f9c-a66e-2e82a33aa410.png" width="100%" />

</p>

This template creates an empty `react-native` project with every package needed to build a basic scalable mobile app. From bottom-navigation to lottie integration and TailWindCSS support. Sponsored by `Digital Art Dealers`

# 💻 Using Template 
Run this command to create a new project using the template
`npx react-native init {YOUR_APP_NAME} --template https://github.com/daboigbae/react-native-template`

** Make sure to replace {YOUR_APP_NAME} with the name you want to give your project

# 📦Installed packages
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

# 🏃‍♀️Running Your New App
#### 📱iOS
Take the following steps to run the application locally for iOS
1. run `yarn install`
2. navigate to the iOS folder using a terminal `cd ios && pod install` 
3. run `yarn ios` at root

#### 📱Android 
Take the following steps to run the application locally for iOS
1. run `yarn install`
2. run `yarn android`

#### Notes
If you run into any issues, please make sure your development environment is set-up with a fresh react native app.

If your android app runs, but it can't connect to the react native server
1. Open a new terminal and navigate to the project
2. Run `adb reverse tcp:8081 tcp:8081`
3. Run `yarn start`
4. Run `yarn android` 

# 📷Screenshots
<p align="center">
<img src="https://github.com/daboigbae/images/blob/main/IMG_9271.PNG" width="90%" />
</p>

# 🙏 Support

We all need support and motivation. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

[If you have any questions, please message us on twitter](https://twitter.com/daboigbae) 
[If you need developers to build your mobile app, visit our website](https://digitalartdealers.net/book_appointment/) 
