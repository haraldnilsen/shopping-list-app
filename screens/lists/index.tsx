import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { ListViewContainer } from "./styles";
import { ListsScreenNavigationProp } from "../../types/navigation";
import { View } from "native-base";
import { getAllKeys, getData } from "../../utils/storage";
import ListHeader from "../../components/Headers/ListHeader";
import RecentListItem from "../../components/RecentListItem";

type ListsScreenProps = {
  navigation: ListsScreenNavigationProp;
};

const Lists = ({ navigation }: ListsScreenProps) => {
  const [shoppingListKeys, setShoppingListKeys] = useState<string[]>([]);
  const [shoppingLists, setShoppingLists] = useState<string[][]>([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAllKeys();
      if (data) {
        setShoppingListKeys(data);
        for (let i = 0; i < data.length; i++) {
          const list = await getData(data[i]);
          setShoppingLists((shoppingLists) =>
            shoppingLists.concat([data[i], ...list])
          );
        }
      }
    };
    getDataFromStorage();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ListViewContainer>
          <ListHeader navigation={navigation} />
          <ScrollView>
            {shoppingLists.length > 0 &&
              shoppingLists.map((shoppingList) => <RecentListItem />)}
          </ScrollView>
        </ListViewContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Lists;
