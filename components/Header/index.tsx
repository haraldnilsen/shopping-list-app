import { Pressable, View } from "react-native";
import { HeaderIconsView, HeaderTitleText, HeaderContainer } from "./styles";
import React from "react";
import Menu from "../../assets/menu";
import Plus from "../../assets/plus";

const Header = () => {
  return (
    <HeaderContainer style={{ height: 90 }}>
      <HeaderIconsView>
        <Pressable>
          <Menu />
        </Pressable>
        <Pressable>
          <Plus />
        </Pressable>
      </HeaderIconsView>
      <HeaderTitleText
        style={{
          textAlign: "center",
          fontSize: 25,
          color: "#C62015",
        }}
      >
        Handlelista
      </HeaderTitleText>
    </HeaderContainer>
  );
};
export default Header;
