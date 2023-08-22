import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ListsScreenNavigationProp } from "../../types/navigation";
import { MMKVInstance } from "react-native-mmkv-storage";

type ListsScreenProps = {
  navigation: ListsScreenNavigationProp;
};

const Lists = ({ navigation }: ListsScreenProps) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      ></TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Lists;
