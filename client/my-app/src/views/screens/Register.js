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
} from "react-native";
import COLORS from "../../consts/colors";
import axios from "axios";
const Register = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    phone: "",
    empId: "",
    password: "",
  });

  const register = () => {
    axios
      .post("http://192.168.1.36:7000/register", data)
      .then((response) => {
        if (response.data.status) {
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
            <Text style={style.title}>SITE WATCH</Text>
          </View>
        </View>
        <View style={{ top: 40 }}>
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
        </View>
        <TouchableOpacity style={style.btn} onPress={register}>
          <Text style={{ color: "white" }}>SIGN UP</Text>
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
    top: 120,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    top: 12,
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
    top: 42,
    height: 60,
    paddingStart: 12,
    marginHorizontal: 20,
    backgroundColor: "#FBEDAD",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 54,
  },
  empId: {
    top: 32,
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
    top: 22,
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
