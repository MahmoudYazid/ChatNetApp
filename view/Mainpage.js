import React,{ useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,TextInput
} from "react-native";





export  const MainPageComponant = ({ navigation }) => {
  return (
    <View style={GeneralStyle.view_s}>
      <View style={GeneralStyle.InsodeView}>
        <Text style={GeneralStyle.Chatnetlogo}> chatnet </Text>

        <View style={loginStyle.loginContiner}>
          <TouchableOpacity
            style={loginStyle.loginbtm}
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <Text style={loginStyle.Logintext}> Login </Text>
          </TouchableOpacity>
        </View>

        <View style={signupStyle.signupContiner}>
          <TouchableOpacity
            style={signupStyle.signupbtm}
            onPress={() => {
              navigation.navigate("signup");
            }}
          >
            <Text style={signupStyle.signuptext}>signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



const signupStyle = StyleSheet.create({
  signupbtm: {
    backgroundColor: "white",
    alignItems: "center",

    borderRadius: 35,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: 130,
    height: 40,
  },
  signuptext: {
    color: "black",
    paddingTop: 10,
  },
  signupContiner: {
    paddingVertical: 0,
  },
});

const loginStyle = StyleSheet.create({
  loginbtm: {
    backgroundColor: "white",
    alignItems: "center",

    borderRadius: 35,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: 130,
    height: 40,
  },
  Logintext: {
    color: "black",
    paddingTop: 10,
  },
  loginContiner: {
    paddingVertical: 10,
  },
});

const GeneralStyle = StyleSheet.create({
  view_s: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  InsodeView: {
    backgroundColor: "black",
    borderRadius: 100,
    borderBottomLeftRadius: 1,
    alignItems: "center",
    width: "50%",
    height: "70%",
  },
  Chatnetlogo: {
    color: "white",
    paddingTop: 40,
  },
});
