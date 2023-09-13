import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import { ListsScreenNavigationProp } from "../../types/navigation";
import { View } from "native-base";
import Header from "../../components/Header";
import { getAllKeys, getData } from "../../utils/storage";

type ListsScreenProps = {
  navigation: ListsScreenNavigationProp;
};

const Lists = ({ navigation }: ListsScreenProps) => {
  const [shoppingLists, setShoppingLists] = useState<string[]>([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAllKeys();
      console.log(data);
      const list = await getData(data[0]);
      console.log(list);
      console.log(list);
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
          <Text>Kjøøh</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Lists;
