import React, { useState, useEffect } from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import COLORS from "../../consts/colors";
import axios from "axios";
const Register = ({ navigation }) => {
  const [data, setData] = useState({
    userName:"",
    email: "",
    phone: "",
    empId: "",
    password: "",
    dob:"",
  });

  const register = () => {
    axios
      .post("http://192.168.1.37:7000/register", data)
      .then((response) => {
        if (response.data.status) {
          navigation.navigate("Login");
          ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent backgroundColor={COLORS.tranparent} />
      <View style={{ top: 60, flexDirection: "column" }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View style={{ alignSelf: "center" }}>
            <Text style={style.title}>SITE MANAGEMENT</Text>
          </View>
        </View>
        <View style={{ top: 40 }}>
        <TextInput
            style={style.userName}
            placeholder="User Name"
            onChangeText={(text) => setData({ ...data, userName: text })}
          />
           
          <TextInput
            style={style.email}
            placeholder="Email"
            onChangeText={(text) => setData({ ...data, email: text })}
          />
          <TextInput
            style={style.phone}
            placeholder="Phone"
            onChangeText={(text) => setData({ ...data, phone: text })}
          />
           <TextInput
            style={style.empId}
            placeholder="Employee ID"
            onChangeText={(text) => setData({ ...data, empId: text })}
          /> 
           <TextInput
            style={style.password}
            placeholder="Password"
            onChangeText={(text) => setData({ ...data, password: text })}
          />

          <TextInput
            style={style.dob}
            placeholder="Date Of Birth"
            onChangeText={(text) => setData({ ...data, dob: text })}
          />
        
          <View></View>
           
        </View>

        <TouchableOpacity style={style.btn} onPress={register}>
          <Text style={{color:"white"}}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ alignSelf: "center", paddingEnd: 20, top: 150 }}>
            Sign in here!
          </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  btn: {
    top: 140,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    top: 10,
    height: 60,
    paddingStart: 12,
    marginHorizontal: 20,
    backgroundColor: "#FBEDAD",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 54,
  },
  // firstName: {
  //   top: 10,
  //   height: 60,
  //   paddingStart: 12,
  //   marginHorizontal: 20,
  //   backgroundColor: "#FBEDAD",
  //   borderRadius: 15,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   elevation: 54,
  // },
  // lastName: {
  //   top: 20,
  //   height: 60,
  //   paddingStart: 12,
  //   marginHorizontal: 20,
  //   backgroundColor: "#FBEDAD",
  //   borderRadius: 15,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   elevation: 54,
  // },
  email: {
    top: 20,
    paddingStart: 12,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "#FBEDAD",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 54,
  },
  phone: {
    top: 30,
    paddingStart: 12,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "#FBEDAD",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 54,
  },
  
  empId: {
    top: 40,
    paddingStart: 12,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "#FBEDAD",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 54,
  },
  password: {
    top: 50,
    height: 60,
    paddingStart: 12,
    marginHorizontal: 20,
    backgroundColor: "#FBEDAD",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 54,
  },
  // designation: {
  //   top: 60,
  //   paddingStart: 12,
  //   height: 60,
  //   marginHorizontal: 20,
  //   backgroundColor: "#FBEDAD",
  //   borderRadius: 15,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   elevation: 54,
  // },
  // address: {
  //   top: 70,
  //   paddingStart: 12,
  //   height: 60,
  //   marginHorizontal: 20,
  //   backgroundColor: "#FBEDAD",
  //   borderRadius: 15,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   elevation: 54,
  // },
  dob: {
    top: 60,
    paddingStart: 12,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "#FBEDAD",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 54,
  },
  title: { fontSize: 32, fontWeight: "bold" },
  textStyle: { fontSize: 16, color: COLORS.grey },
});
export default Register;
