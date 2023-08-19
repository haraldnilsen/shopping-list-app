import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Handlelista" component={HomeScreen} />
          </Stack.Navigator>
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
