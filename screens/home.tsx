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
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [shoppingItem, setShoppingItem] = useState("");

  const addItemHandler = () => {
    setShoppingList((shoppingList) => [...shoppingList, shoppingItem]);
    setShoppingItem("");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={70}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <HomeContainer>
          <ListContainer>
            {shoppingList.map((listItem) => (
              <ListItem item={listItem} />
            ))}
          </ListContainer>
          <ListInputContainer>
            <ListInput>
              <TextInput
                value={shoppingItem}
                onChangeText={(text) => setShoppingItem(text)}
                onSubmitEditing={addItemHandler}
              />
            </ListInput>
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