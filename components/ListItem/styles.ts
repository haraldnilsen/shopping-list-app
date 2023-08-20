import styled from "styled-components/native";

export const ToDoContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  padding-bottom: 14px;
  align-items: center;
`;

export const ToDoItem = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ToDoText = styled.Text`
  color: #555555;
  font-size: 23px;
`;
