import React,{setState,useState} from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,ScrollView,Alert,SafeAreaView
} from "react-native";

export default function ConversatioForm({ route, navigation }) {
    const {data_} = route.params;
    const { useroneName_ } = route.params;
    const { userOneid_ } = route.params;
    const { UserTwoName_ } = route.params;
    const { userTwoid_ } = route.params;
    const {userNameparam}=route.params;
    const [targetedmsg,settargetedmsg]=useState("");
  
  return (
    <View>
      <SafeAreaView style={SearchBarStyleSheet.Container} Ref>
        <TextInput
          placeholder="Type..."
          placeholderTextColor={"black"}
          style={SearchBarStyleSheet.SearchTextinput}
          onChangeText={(text___) => {
            settargetedmsg(text___);
          }}
        ></TextInput>
        <TouchableOpacity
          style={SearchBarStyleSheet.Searchbtminput}
          onPress={() => {
            fetch(
              `https://chatnet-d7vv.onrender.com/sendmsg?sid=${
                useroneName_ == userNameparam ? userOneid_ : userTwoid_
              }&rid=${
                useroneName_ == userNameparam ? userTwoid_ : userOneid_
              }&msg=${targetedmsg}`,
              { method: "POST" }
            ).then((json) => {
              Alert.alert("msgSent");
            });
          }}
        >
          <Text style={SearchBarStyleSheet.Searchbtminputtext}>send</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView>
        {data_.map((getdata) => (
          <ScrollView key={Math.random()} style={msgstyle.msgContainer}>
            <Text
              key={Math.random()}
              style={{ color: "green", left: 60 }}
              onLongPress={() => {
                Alert.alert("Alert", "Would You Like to Delete Msg", [
                  {
                    text: "delete",
                    onPress: () => {
                      fetch(
                        `https://chatnet-d7vv.onrender.com/del/${getdata._id}`,
                        { method: "DELETE" }
                      ).then(() => {
                        Alert.alert("Msg Deleted");
                      });
                    },
                  },
                  {
                    text: "Close",
                  },
                ]);
              }}
            >
              {userOneid_ == getdata.senderid ? useroneName_ : UserTwoName_}
            </Text>
            <Text
              key={Math.random()}
              style={{ marginLeft: 10 }}
              onLongPress={() => {
                Alert.alert("Alert", "Would You Like to Delete Msg", [
                  {
                    text: "delete",
                    onPress: () => {
                      fetch(
                        `https://chatnet-d7vv.onrender.com/del/${getdata._id}`,
                        { method: "DELETE" }
                      ).then(() => {
                        Alert.alert("Msg Deleted");
                      });
                    },
                  },
                  {
                    text: "Close",
                  },
                ]);
              }}
            >
              {getdata.msg}
            </Text>
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
}
const msgstyle = StyleSheet.create({
  msgContainer: {
    width: "80%",
    height: 100,
    marginLeft: "10%",
    backgroundColor: "white",
    marginBottom: "1%",
    borderRadius: 35,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomEndRadius:30,
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
    position:'fix'
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

    shadowColor: "brown",
  },
  Searchbtminputtext: {
    alignContent: "center",
    alignSelf: "center",
    paddingTop: 10,
  },
});