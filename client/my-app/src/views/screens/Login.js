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
import axios from "axios";

import COLORS from "../../consts/colors";
const Login = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const Login = () => {
    navigation.navigate("HomeScreen");
    axios
      .post("http://192.168.1.36:7000/login", data)
      .then((response) => {
        if (response.data.status) {
          navigation.navigate("Home");
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
      <View style={{ top: 160, flexDirection: "column" }}>
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
            style={style.password}
            placeholder="Password"
            onChangeText={(text) => setData({ ...data, password: text })}
          />

          <TouchableOpacity>
            <Text style={{ alignSelf: "flex-end", paddingEnd: 20, top: 52 }}>
              forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.btn} onPress={Login}>
          <Text style={{ color: "white" }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ alignSelf: "center", paddingEnd: 20, top: 150 }}>
            Register here!
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
    top: 32,
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
export default Login;
