import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const Lists = ({ navigation }: any) => {
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
