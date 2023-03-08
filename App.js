import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainPageComponant } from "./view/Mainpage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignupForm } from "./view/Signup";
import { LoginForm } from "./view/LoginView";
import MsgPageForm  from "./view/Mymsgs";

import { TextInput } from "react-native-gesture-handler";
import ConversatioForm from "./view/talks";




export default class App extends React.Component {
  
    
  render(){
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainPageComponant} />
          <Stack.Screen name="signup" component={SignupForm} />
          <Stack.Screen name="login" component={LoginForm} />
          <Stack.Screen name="msg" component={MsgPageForm} />
   

          <Stack.Screen name="conversation" component={ConversatioForm} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
