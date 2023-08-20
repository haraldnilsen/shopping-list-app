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

export const ListInputContainer = styled.View`
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ListInput = styled.TextInput`
  border: 2px solid black;
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  &:focus {
    border: 2px solid red;
    background-color: red;
  }
`;

export const ListInputButton = styled.Button`
  padding-left: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const styles = StyleSheet.create({
  listInputButton: {
    borderRadius: 10,
    marginLeft: 10,
    paddingLeft: 15,
    backgroundColor: "#C62015",
  },
});
