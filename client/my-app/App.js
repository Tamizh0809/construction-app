import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import Login from "./src/views/screens/Login";
import HomeScreen from "./src/views/screens/HomeScreen";
import DetailsScreen from "./src/views/screens/DetailsScreen";

import Register from "./src/views/screens/Register";
import Notify from "./src/views/screens/Notify";
import Message from "./src/views/screens/Message";
import Material from "./src/views/screens/Material";
import AlertScreen from "./src/views/screens/AlertScreen";
import Forget from "./src/views/screens/Forget";
import main from "./src/views/screens/main";
import Login2 from "./src/views/screens/Login2";
import Register2 from "./src/views/screens/Register2";



import * as Location from "expo-location";

const Stack = createStackNavigator();

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    console.log("location", text);
  }, []);
  console.log("location", location);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Notify" component={Notify} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="Material" component={Material} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="main" component={main} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="Register2" component={Register2} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;