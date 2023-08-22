import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Lists } from "./screens";
import type { RootDrawerParamList } from "./types/navigation";
import { NativeBaseProvider } from "native-base";
import { MMKVLoader } from "react-native-mmkv-storage";

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const MMKV = new MMKVLoader().initialize();

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
              initialParams={{ localStorage: MMKV }}
            />
            <Drawer.Screen
              name="Lists"
              component={Lists}
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
