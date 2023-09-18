import { Pressable, View } from "react-native";
import {
  ListHeaderIconsView,
  HeaderTitleText,
  HeaderContainer,
} from "../styles";
import React from "react";
import Menu from "../../../assets/menu";
import Plus from "../../../assets/plus";
import { ListsScreenNavigationProp } from "../../../types/navigation";

interface HeaderProps {
  navigation: ListsScreenNavigationProp;
}

const ListHeader: React.FC<HeaderProps> = ({ navigation }) => {
  return (
    <HeaderContainer style={{ height: 90 }}>
      <ListHeaderIconsView>
        <Pressable
          style={{ width: 40, height: 40 }}
          onPress={navigation?.openDrawer}
        >
          <Menu />
        </Pressable>
        <HeaderTitleText>Tidligere lister</HeaderTitleText>
        <Pressable></Pressable>
      </ListHeaderIconsView>
    </HeaderContainer>
  );
};
export default ListHeader;
