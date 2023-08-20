import { Pressable, View } from "react-native";
import { HeaderIconsView, HeaderTitleText, HeaderContainer } from "./styles";
import React from "react";
import Menu from "../../assets/menu";
import Plus from "../../assets/plus";

interface HeaderProps {
  newItemHandler?: () => void;
}

const Header: React.FC<HeaderProps> = ({ newItemHandler }) => {
  return (
    <HeaderContainer style={{ height: 90 }}>
      <HeaderIconsView>
        <Pressable>
          <Menu />
        </Pressable>
        <Pressable onPress={newItemHandler}>
          <Plus />
        </Pressable>
      </HeaderIconsView>
      <HeaderTitleText>Handlelista</HeaderTitleText>
    </HeaderContainer>
  );
};
export default Header;
