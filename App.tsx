import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import { NativeBaseProvider } from "native-base";
import Menu from "./assets/menu";
import Plus from "./assets/plus";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name="Handlelista"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
