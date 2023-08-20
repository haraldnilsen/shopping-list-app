import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { NativeBaseProvider, Button } from "native-base";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
import { useState } from "react";
import {
  styles,
  HomeContainer,
  ListContainer,
  ListInput,
  ListInputContainer,
} from "./styles";
import React from "react";

const HomeScreen = ({ navigation }: any) => {
  const [shoppingList, setShoppingList] = useState<string[]>([
    "Brød",
    "Melk",
    "Egg",
    "Kjøttdeig",
    "Kylling",
  ]);
  const [shoppingItem, setShoppingItem] = useState("");

  const addItemHandler = () => {
    if (shoppingItem === "") {
      return;
    }
    setShoppingList((shoppingList) => [...shoppingList, shoppingItem]);
    setShoppingItem("");
  };

  const newItemHandler = () => {
    setShoppingList([]);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <HomeContainer>
          <Header {...{ newItemHandler }} />
          <ListContainer>
            {shoppingList.map((listItem) => (
              <ListItem item={listItem} />
            ))}
          </ListContainer>
          <ListInputContainer>
            <ListInput
              value={shoppingItem}
              onChangeText={(text) => setShoppingItem(text)}
              onSubmitEditing={addItemHandler}
            />
            <Button style={styles.listInputButton} onPress={addItemHandler}>
              +
            </Button>
          </ListInputContainer>
        </HomeContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
