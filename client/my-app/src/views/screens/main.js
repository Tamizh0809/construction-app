import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");

import houses from "../../consts/houses";
const Main = ({ navigation }) => {
  {/*const optionsList = [
    { title: "Buy a Home", img: require("../../assets/house1.jpg") },
    { title: "Rent a Home", img: require("../../assets/house2.jpg") },
  ];
  const categoryList = ["Popular", "Recommended", "Nearest"]; */}

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        
        
        <ImageBackground
          style={style.image}
          source={require("../../assets/b5.jpg")}
          resizeMethod="auto"
        >
             <View>
          <Text style={style.title}>WELCOME TO LOGIN PAGE</Text>
        </View>

        <TouchableOpacity
          style={style.btn1}
          onPress={() => navigation.navigate("Login")} >
          <Text style={{ color: "black",fontSize: 15, fontWeight: "bold" }}>MANAGER'S LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn2}
          onPress={() => navigation.navigate("Login2")} >
          <Text style={{ color: "black",fontSize: 15, fontWeight: "bold" }} >WORKER'S LOGIN</Text>
        </TouchableOpacity>
        
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>

  );
};

const style = StyleSheet.create({
  image: {
    height: 650,
    width: "100%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
 
  btn1: {
    paddingStart: 12,
    top: 200,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "#faebd7",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",

  },
  btn2: {
    top: 220,
    paddingStart: 12,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "#faebd7",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {paddingHorizontal: 20 ,paddingTop: 250, fontSize: 28, fontWeight: "bold",color: COLORS.white},
  textStyle: { fontSize: 20, color: COLORS.grey },
});

export default Main;
