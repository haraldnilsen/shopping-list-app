import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import { NativeBaseProvider } from "native-base";
import Menu from "./assets/menu";
import Plus from "./assets/plus";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: (props) => (
                <View style={{ height: 100 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingLeft: 40,
                      paddingRight: 40,
                      paddingTop: 20,
                    }}
                  >
                    <Menu />
                    <Plus />
                  </View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 30,
                      color: "#C62015",
                    }}
                  >
                    Handlelista
                  </Text>
                </View>
              ),
            }}
          >
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
