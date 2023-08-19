import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ToDoContainer, ToDoText } from "./styles";
import React from "react";

interface ListItemProps {
  item: string;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <ToDoContainer>
      <BouncyCheckbox />
      <ToDoText>{item}</ToDoText>
    </ToDoContainer>
  );
};

export default ListItem;
