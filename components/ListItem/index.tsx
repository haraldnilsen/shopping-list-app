import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ToDoContainer, ToDoItem, ToDoText } from "./styles";
import React, { useState, useEffect, useRef } from "react";
import * as Font from "expo-font";

interface ListItemProps {
  item: string;
  removeItemHandler: (item: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, removeItemHandler }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [textWidth, setTextWidth] = useState(0);
  const [textHeight, setTextHeight] = useState(0);

  const ref = useRef(View.prototype);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const [checked, setChecked] = useState(false);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../../assets/fonts/Roboto-Light.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  const handleChecked = (newValue: boolean) => {
    ref.current.measure((x, y, w, h) => {
      setTextWidth(w);
      setTextHeight(h);
      animateStrike();
    });

    setChecked(newValue);
  };

  const animateStrike = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const strikeWidth = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, textWidth],
    extrapolate: "clamp",
  });

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ToDoContainer>
      <ToDoItem onPress={() => handleChecked(!checked)}>
        <BouncyCheckbox
          size={25}
          isChecked={checked}
          onPress={() => handleChecked(!checked)}
          disableBuiltInState
          fillColor="#C62015"
        />
        <View ref={ref}>
          <ToDoText style={{ fontFamily: "custom-font" }}>{item}</ToDoText>
          {checked && (
            <Animated.View
              style={{
                width: strikeWidth,
                top: textHeight / 2 + 1,
                position: "absolute",
                height: 2,
                backgroundColor: "#555555",
              }}
            />
          )}
        </View>
      </ToDoItem>
    </ToDoContainer>
  );
};

export default ListItem;
