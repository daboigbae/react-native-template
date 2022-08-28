## React-native template 2022💿 💿 💿
This is a template that you can use to start a react-native project in 2022

### Using Template 💻 💻 💻 💻 💻 
Run this command to create a new react-native project using the template
`npx react-native init $YourAppName --template https://github.com/daboigbae/react-native-template`

** Make sure to replace $YourAppName with the name you want to give your project

### Running Project🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ 
##### iOS
Take the following steps to run the application locally for iOS
1. run `yarn install`
2. navigate to the iOS folder using a terminal `cd ios` 
3. run `pod install`
4. run `yarn start` within the directory in a terminal
5. open the `temp.xworspace` using xcode
6. run the project using xcode once everything loads

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