import React from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import COLORS from "../../consts/colors";
const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent backgroundColor={COLORS.tranparent} />

      {/* Onboarding Image */}
      <Image
        source={require("../../assets/onboardImage.jpg")}
        style={style.image}
      />

     
      <View style={{ paddingHorizontal: 20 ,paddingTop: 50 }}>
        
        <View>
          <Text style={style.title}>SITE</Text>
          <Text style={style.title}>MANAGEMENT</Text>
        </View>


        <View style={{ marginTop: 10 }}>
          <Text style={style.textStyle}> You Want It, We Build It.</Text>
        </View>
      </View>

      {/* Button container */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 90,
        }}
      >
        {/* button */}
        <Pressable onPress={() => navigation.navigate("main")}>
          <View style={style.btn}>
            <Text style={{ color: "white" }}>Get Start</Text>
          </View>
        </Pressable>
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
 
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 32, fontWeight: "bold" },
  textStyle: { fontSize: 20, color: COLORS.grey },
});

export default OnBoardScreen;
