import React,{useState} from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,Keyboard,Alert
} from "react-native";
import {connectionlink} from './variable'

export const SignupForm =({navigation})=>{
  const [name_, setName] = useState("");
  const [password_, setPassword] = useState("");
  const [phone_, setPhone] = useState("");


    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={GeneralStyle.view_s}>
          <View style={GeneralStyle.InsodeView}>
            <Text style={GeneralStyle.Chatnetlogo}> chatnet Signup </Text>

            <View style={SignupStyle.SignupContiner}>
              <TextInput
                placeholder="name"
                placeholderTextColor={"black"}
                style={SignupStyle.SignupTextBox}
                onChangeText={(t) => {
                  setName(t);
                }}
              ></TextInput>
            </View>

            <View style={SignupStyle.SignupContiner}>
              <TextInput
                placeholder="password"
                placeholderTextColor={"black"}
                style={SignupStyle.SignupTextBox}
                onChangeText={(t) => {setPassword(t);}}
              ></TextInput>
            </View>

            <View style={SignupStyle.SignupContiner}>
              <TextInput
                placeholder="phone"
                placeholderTextColor={"black"}
                style={SignupStyle.SignupTextBox}
                onChangeText={(t) => {setPhone(t);}}
                keyboardType="numeric"
              ></TextInput>
            </View>

            <View style={signupbtmStyle.signupbtmstyleContainer}>
              <TouchableOpacity style={signupbtmStyle.signupBtm}
              onPress={()=>{
                fetch(
                   `${connectionlink}/signup?name=${name_}&pass=${password_}&tel=${Number(
                      phone_,
                   )}`,
                   {method: 'POST'},
                )
                   .then(() => {
                      Alert.alert('Completed')
                   })
                   .then(() => {
                      navigation.navigate('login')
                   })
                   .catch(() => {
                      Alert.alert('NotCompleted')
                   })
                  
                
                
              }}
              
              >
                <Text style={signupbtmStyle.signupBtmText}> Signup </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  
}




const signupbtmStyle = StyleSheet.create({
  signupBtm: {
    backgroundColor: "white",
    alignItems: "center",

    borderRadius: 35,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: 150,
    height: 40,
  },
  signupBtmText: {
    color: "black",
    paddingTop: 10,
  },
  signupbtmstyleContainer: {
    paddingVertical: 6,
  },
});

const SignupStyle = StyleSheet.create({
  SignupTextBox: {
    backgroundColor: "white",
    alignItems: "center",

    borderRadius: 35,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: 200,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
  },
  Signuptext: {
    color: "black",
    paddingTop: 10,
  },
  SignupContiner: {
    paddingVertical: 4,
  },
});

const GeneralStyle = StyleSheet.create({
  view_s: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  InsodeView: {
    backgroundColor: "black",
    borderRadius: 100,
    borderBottomLeftRadius: 1,
    alignItems: "center",
    width: "70%",
    height: "80%",
  },
  Chatnetlogo: {
    color: "white",
    paddingTop: 40,padding:10
  },
});
