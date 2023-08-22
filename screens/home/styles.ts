import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const HomeContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
`;

export const ListContainer = styled.View`
  flex: 1;
  padding-top: 25px;
`;

export const EmptyListContainer = styled.View`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  padding: 95px;
  margin-bottom: 200px;
`;

export const EmptyListText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  line-height: 40px;
`;

export const ListInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ListInput = styled.TextInput`
  border: 2px solid #c62015;
  width: 80%;
  height: 60px;
  padding: 10px;
  border-radius: 15px 0px 0px 15px;
`;

export const styles = StyleSheet.create({
  listInputButton: {
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#C62015",
  },
});
