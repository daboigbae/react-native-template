![Screen Shot 1](https://user-images.githubusercontent.com/26166389/188032346-08af84de-9396-4206-b6ba-6355ed7b571e.png | width=100)
![Screen Shot 2](https://user-images.githubusercontent.com/26166389/188032348-83270e8c-4b98-4d94-9280-837097e6d91e.png | width=100)

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
