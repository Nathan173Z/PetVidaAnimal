import styled, { css } from "styled-components/native";
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 63px;
  top: 17px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  border-radius: 16px;
  background-color: #FFFFFF;
`;

export const Input = styled(TextInput)`
  flex: 1;
  padding: 0 25px;
`;

export const IconSearch = styled.TouchableOpacity`
top: 1.5px;
padding: 0 19px;
`

export const Icon = styled(Feather)`
font-size: 25px;
color:rgba(236, 219, 182, 1)
`

export const IconMenu = styled(Feather)`
font-size: 30px;
color:#FFFF;
`

export const ContainerIcon = styled.View`
left: 40px;
`