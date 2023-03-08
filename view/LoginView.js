import React,{useState} from "react";
import { View,TextInput ,Text,StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import fetch from "node-fetch";


const ReturnMyid=(MyUserName)=>{
  fetch(`
https://chatnet-d7vv.onrender.com/finduser?name=${MyUserName} `).then((res)=>{
  res.json().then((data)=>{
    data.map((fetchdata)=>{
      return fetchdata._id
    })
  })
});

}


export const LoginForm = ({ navigation }) => {

  const [name_, setName] = useState("");
  const [password_, setPassword] = useState("");

  const getId = async () => {
  
    fetch(
      `https://chatnet-d7vv.onrender.com/login?identify=${name_}&psw=${password_}`,
      {
        method: "GET",
      }
    ).then((rs) => {
      rs.json()
        .then((data) => {
             navigation.navigate("msg", {
               _msgsdata_: data,
               username_: name_,
             
             });

        })
        .catch(() => {
          Alert.alert("Not Complete");
        });

      // Do something with response
    });
      

  };
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={GeneralStyle.view_s}>
        <View style={GeneralStyle.InsodeView}>
          <Text style={GeneralStyle.Chatnetlogo}> chatnet signin </Text>

          <View style={loginStyle.loginContiner}>
            <TextInput
              placeholder="name"
              placeholderTextColor={"black"}
              style={loginStyle.LoginTextBox}
              onChangeText={(e) => {
                setName(e);
              }}
            ></TextInput>
          </View>

          <View style={loginStyle.loginContiner}>
            <TextInput
              placeholder="password"
              placeholderTextColor={"black"}
              style={loginStyle.LoginTextBox}
              onChangeText={(e) => {
                setPassword(e);
              }}
            ></TextInput>
          </View>

          <View style={SigninbtmStyle.SigninbtmstyleContainer}>
            <TouchableOpacity
              style={SigninbtmStyle.SinginBtm}
              onPress={() => {
                getId();

                

              }}
                
                 
                  
                
                    
              

                   
             
                 
             
            >
              <Text style={SigninbtmStyle.SignInBtmText}> login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};


const SigninbtmStyle = StyleSheet.create({
  SinginBtm: {
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
  SignInBtmText: {
    color: "black",
    paddingTop: 10,
  },
  SigninbtmstyleContainer: {
    paddingVertical: 0,
    paddingTop:7
  },
});

const loginStyle = StyleSheet.create({
  LoginTextBox: {
    backgroundColor: "white",
    alignItems: "center",

    borderRadius: 35,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: 200,
    height: 40,
    textAlign:'center',
    textAlignVertical:'center'
  },
  Logintext: {
    color: "black",
    paddingTop: 10,
  },
  loginContiner: {
    paddingVertical: 5,
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
    width: "70%",
    height: "70%",
  },
  Chatnetlogo: {
    color: "white",
    paddingTop: 25,
  },
});
