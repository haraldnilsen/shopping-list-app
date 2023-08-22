import { Pressable, View } from "react-native";
import { HeaderIconsView, HeaderTitleText, HeaderContainer } from "./styles";
import React from "react";
import Menu from "../../assets/menu";
import Plus from "../../assets/plus";
import { HomeScreenNavigationProp } from "../../types/navigation";

interface HeaderProps {
  newItemHandler?: () => void;
  navigation: HomeScreenNavigationProp;
}

const Header: React.FC<HeaderProps> = ({ newItemHandler, navigation }) => {
  return (
    <HeaderContainer style={{ height: 90 }}>
      <HeaderIconsView>
        <Pressable
          style={{ backgroundColor: "red", width: 40, height: 40 }}
          onPress={navigation?.openDrawer}
        >
          <Menu />
        </Pressable>
        <HeaderTitleText>Handlelista</HeaderTitleText>
        <Pressable onPress={newItemHandler}>
          <Plus />
        </Pressable>
      </HeaderIconsView>
    </HeaderContainer>
  );
};
export default Header;
