import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  FlatList,
} from "react-native";
import { ListsScreenNavigationProp } from "../../types/navigation";
import { View } from "native-base";
import Header from "../../components/Header";
import { getAllKeys, getData } from "../../utils/storage";

type ListsScreenProps = {
  navigation: ListsScreenNavigationProp;
};

const Lists = ({ navigation }: ListsScreenProps) => {
  const [shoppingLists, setShoppingLists] = useState<string[][]>([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAllKeys();
      if (data) {
        for (let i = 0; i < data.length; i++) {
          const list = await getData(data[i]);
          setShoppingLists((shoppingLists) => shoppingLists.concat([list]));
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
        <View>
          {shoppingLists.length > 0 &&
            shoppingLists.map((shoppingList) => (
              <FlatList
                data={shoppingList}
                renderItem={({ item }) => <Text>{item}</Text>}
              />
            ))}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Lists;
