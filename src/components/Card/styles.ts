import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
background-color: #FFFFFF;
border-radius: 16px;
width: 250px;
height: 30px;
text-align: center;
padding-right: 25px;
`;

export const IconMenu = styled(Feather)`
font-size: 42px;
color: #FFF;
top:6px
`
export const ContainerCart = styled.TouchableOpacity`
left: 17px;
top: 18px;
`

export const IconCar = styled(Feather)`
font-size: 37px;
color: #FFF;
`

export const ContainerMenu = styled.TouchableOpacity`
top: 12px;
right: 17px;

`

export const InputSearch = styled.View`
top: 27px;
`

export const IconSearch = styled(Feather)`
  font-size:25px;
  color: #ECDBB6;
  margin-right: 10px;
`;

export const Button = styled.TouchableOpacity`
bottom:27px;
left:16px;
width: 40px;
`