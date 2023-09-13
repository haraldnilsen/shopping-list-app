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
  HomeViewContainer,
  ListContainer,
  ListInput,
  ListInputContainer,
  EmptyListContainer,
  EmptyListText,
} from "./styles";
import React from "react";
import { HomeScreenNavigationProp } from "../../types/navigation";
import { storeData, getData } from "../../utils/storage";

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
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
    storeData("shoppingList" + Date.now(), shoppingList);
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
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <HomeViewContainer>
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
              onSubmitEditing={addItemHandler}
              blurOnSubmit={false}
              placeholder="Skriv inn en ny ting..."
            />
            <Button style={styles.listInputButton} onPress={addItemHandler}>
              +
            </Button>
          </ListInputContainer>
        </HomeViewContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
