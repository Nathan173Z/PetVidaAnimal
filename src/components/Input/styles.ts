import styled, { css } from "styled-components/native";
import { TextInput } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 63px;
  top: 17px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  background-color: #FFFFFF;
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 28px;
  width: 294px;
  padding-left: 68px;
`;

