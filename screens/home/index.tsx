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
import ListItem from "../../components/ListItem";
import Header from "../../components/Header";
import { useState } from "react";
import {
  styles,
  HomeContainer,
  ListContainer,
  ListInput,
  ListInputContainer,
  EmptyListContainer,
  EmptyListText,
} from "./styles";
import React from "react";
import { HomeScreenNavigationProp } from "../../types/navigation";
import { MMKVInstance } from "react-native-mmkv-storage";

type HomeScreenProps = {
  route: HomeScreenNavigationProp;
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  const [shoppingList, setShoppingList] = useState<string[]>([
    "Brød",
    "Melk",
    "Egg",
    "Kjøttdeig",
    "Kylling",
  ]);
  const [shoppingItem, setShoppingItem] = useState("");

  // get params passed from App.tsx
  const { localStorage } = navigation.

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

  const removeItemHandler = (item: string) => {
    setShoppingList((shoppingList) =>
      shoppingList.filter((listItem) => listItem !== item)
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <HomeContainer>
          <Header {...{ newItemHandler, navigation }} />
          {shoppingList.length > 0 ? (
            <ListContainer>
              {shoppingList.map((listItem) => (
                <ListItem
                  item={listItem}
                  removeItemHandler={removeItemHandler}
                />
              ))}
            </ListContainer>
          ) : (
            <EmptyListContainer>
              <EmptyListText>
                Handlelisten din er tom! Start en ny handleliste ved å skrive
                inn en ny ting under 👇
              </EmptyListText>
            </EmptyListContainer>
          )}
          <ListInputContainer>
            <ListInput
              value={shoppingItem}
              onChangeText={(text) => setShoppingItem(text)}
              onSubmitEditing={() => addItemHandler()}
              blurOnSubmit={false}
              placeholder="Skriv inn en ny ting å handle"
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
