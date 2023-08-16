import { Text, TextInput, TouchableOpacity } from "react-native";
import ListItem from "../components/ListItem";
import { useState } from "react";
import {
  HomeContainer,
  ListContainer,
  ListInput,
  ListInputContainer,
} from "./styles";

const HomeScreen = ({ navigation }: any) => {
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [shoppingItem, setShoppingItem] = useState("");

  const addItemHandler = () => {
    setShoppingList((shoppingList) => [...shoppingList, shoppingItem]);
    setShoppingItem("");
  };

  return (
    <HomeContainer>
      <ListContainer>
        {shoppingList.map((listItem) => (
          <ListItem item={listItem} />
        ))}
      </ListContainer>
      <ListInputContainer>
        <ListInput>
          <TextInput value={shoppingItem} onChangeText={setShoppingItem} />
        </ListInput>
        <TouchableOpacity onPress={addItemHandler}>
          <Text>+</Text>
        </TouchableOpacity>
      </ListInputContainer>
    </HomeContainer>
  );
};

export default HomeScreen;
