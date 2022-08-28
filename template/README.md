React Native Basic App Template 💿 💿 💿
This is the repo of the mobile app for Wasabi Music.

The application was written in React Native. Currently uses a hard coded playlist of our favorite NFT songs as we implement the support to utilize the full catalog of NFT music found at https://wasabimusic.io/

📱📱📱📱📱 Try the app now on TestFlight for iOS https://testflight.apple.com/join/4nCSJUqq Android coming soon

Folder Structure 📁 📁 📁 📁
App.js - main application

e2e

detox test cases
src

assets - for all images and test input data
components - for screen components
navigation - for all navigation objects
redux - using redux slices for state
screens - a place for all our screens
styles - shared styling
utils - for all helper functions
Running the project 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️
iOS
Take the following steps to run the application locally for iOS

run yarn install
navigate to the iOS folder using a terminal cd ios
run pod install
run yarn start within the directory in a terminal
open the temp.xworspace using xcode
run the project using xcode once everything loads
Android
Take the following steps to run the application locally for iOS

run yarn install
run yarn android
If you run into any issues, please make sure your development environment is set-up with a fresh react native app.

If your android app runs, but it can't connect to the react native server

Open a new terminal and navigate to the project
Run adb reverse tcp:8081 tcp:8081
Run yarn start
Run yarn android
Running Test Cases 🧪 🧪 🧪 🧪 🧪 🧪
iOS
Take the following steps to run the test cases for the application

yarn install
navigate to the iOS folder using a terminal cd ios
run pos install
run detox build -c ios.sim.debug to build the debug version of the app for testing
run detox test -c ios.sim.debug to run the test cases
Android coming soon
If everything is installed correctly, the tests should run