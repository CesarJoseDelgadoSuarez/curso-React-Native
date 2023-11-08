import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { View, StatusBar } from "react-native";
import TabNavigator from "./router/Tabs/MainTab";

const Main = () => (
  <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor="transparent" />
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  </View>
);

export default Main;
