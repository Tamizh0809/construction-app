import "react-native-gesture-handler";
import React from "react";
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



const Stack = createStackNavigator();

const App = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
"C:\Users\windows\Desktop\project\client\my-app\src\assets\background.jpg" 
