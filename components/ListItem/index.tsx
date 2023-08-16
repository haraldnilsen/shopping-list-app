import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ToDoContainer } from "./styles";

interface ListItemProps {
  item: string;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <ToDoContainer>
      <BouncyCheckbox />
      <Text>{item}</Text>
    </ToDoContainer>
  );
};

export default ListItem;
