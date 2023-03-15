import React, {useState } from "react";

import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,Image, ScrollView
} from "react-native";

import {connectionlink} from './variable'
export default function MsgPageForm({ route, navigation }) {
  const [textinput__,settextinput] = useState("");
  
  const { _msgsdata_ } = route.params;

  const {username_}=route.params;

 
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>

      <SafeAreaView>
        <View style={SearchBarStyleSheet.Container}>
          <TextInput
            placeholder="Type..."
            placeholderTextColor={"black"}
            style={SearchBarStyleSheet.SearchTextinput}
            onChangeText={(text__) => {
              settextinput(text__);
            }}
          ></TextInput>
          <TouchableOpacity
            style={SearchBarStyleSheet.Searchbtminput}
            onPress={() => {
               fetch(
                 `${connectionlink}/sendcsv?sender=${username_}&reciever=${textinput__}`,
                 { method: "POST" }
               ).then((data=>{
                console.log("complete")
               }));
              
             
             
            }}
          >
            <Text style={SearchBarStyleSheet.Searchbtminputtext}>Start Chat</Text>
          </TouchableOpacity>
        </View>

        {_msgsdata_.map((data) => (
          <View key={Math.random()}>
            <TouchableOpacity
              style={dataStyleSheet.container}
              key={Math.random()}
              onPress={() => {
                fetch(
                  `${connectionlink}/priverchat?sid=${data.userOneid}&rid=${data.usertwoid}`,
                  { method: "GET" }
                ).then((res) => {
                  res.json()
                     .then(JsonData => {
                   
                     
                        navigation.navigate('conversation', {
                        
                           useroneName_: data.UserOneName,
                           userOneid_: data.userOneid,
                           UserTwoName_: data.UserTwoName,
                           userTwoid_: data.usertwoid,
                           userNameparam: username_
                        })
                     })
                     .catch((err) => {
                   
                     });
                });
              }}
            >
              <Image
                style={dataStyleSheet.imageConfig}
                source={require("../assets/images.png")}
              />
              <View
                style={{
                  marginLeft: 20,
                  marginTop: 30,
                  flexDirection: "column",
                }}
              >
                <Text style={{ marginLeft: 1, marginTop: 0 }}>
                  {username_ == data.UserOneName
                    ? data.UserTwoName
                    : data.UserOneName}
                  
                
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );}
  
  


const dataStyleSheet = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",

    borderWidth: 0.2,

    width: 400,
    height: 120,

    borderRadius: 25,
    marginBottom: 1,
    flexDirection: "row",
  },
  text: {
    
    marginVertical: 4,
    marginHorizontal: 16,
  },
  imageConfig: {
    borderRadius: 100,
    height: 100,
    width: 100,
    marginTop: 1,
    marginLeft: 3,
  },
});




const SearchBarStyleSheet = StyleSheet.create({
  SearchTextinput: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 0.2,
    borderBottomWidth: 1,
    textAlign: "center",
    textAlignVertical: "center",
    width: "65%",
    height: 40,
    shadowColor: "#e1dfdf",
    shadowRadius: 20,
    shadowOpacity: 10,
    paddingRight: 20,
  },
  Container: {
    alignItems: "center",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Searchbtminput: {
    backgroundColor: "#4e82fb",
    borderRadius: 3,
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 0,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 100,
    borderTopEndRadius: 200,
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderTopStartRadius: 10,

    width: "30%",
    height: "100%",
    alignSelf: "center",
    alignContent: "center",
    shadowColor: "brown",
  },
  Searchbtminputtext: {
    alignContent: "center",
    alignSelf: "center",
    paddingTop: 10,
  },
});
