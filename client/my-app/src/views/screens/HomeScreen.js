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
const HomeScreen = ({ navigation }) => {
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

      <View style={style.header}>
        <View>
          <Text style={{ color: COLORS.blue }}>Site Location</Text>
          <Text
            style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}
          >
            Pondicherry - SW3241
          </Text>
        </View>
        <Image
          style={style.profileImage}
          source={require("../../assets/logo.png")}
        />
        
      </View>
      {/* <TouchableOpacity
          style={style.sortBtn}
          onPress={() => navigation.navigate("Notify")} >
          <Icon name="notifications" color={COLORS.white} size={25} />

        </TouchableOpacity> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={style.image}
          source={require("../../assets/background.jpg")}
          resizeMethod="auto"
        >

        <TouchableOpacity
          style={style.btn1}
          onPress={() => navigation.navigate("Message")} >
          <Text style={{ color: "white" }}>MESSAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn2}
          onPress={() => navigation.navigate("Material")} >
          <Text style={{ color: "white" }}>Material Request</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn3}
          onPress={() => navigation.navigate("AlertScreen")} >
          <Text style={{ color: "white" }}>Alert</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }} >
        </View>
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
  header: {
    padding:20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 12,
  },

  sortBtn: {
    left:300,
    backgroundColor: COLORS.dark,
    height: 45,
    width: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,

  },
  btn1: {
    paddingStart: 12,
    top: 200,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",

  },
  btn2: {
    top: 220,
    paddingStart: 12,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  btn3: {
    paddingStart: 12,
    top: 240,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",

  },


});

export default HomeScreen;
