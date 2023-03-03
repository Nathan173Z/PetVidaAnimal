import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const InputArea = styled.View`
`;

export const Input = styled.TextInput`
background-color: #FFFFFF;
border-radius: 16px;
width: 250px;
height: 28px;
text-align: center;
`;


export const Icon = styled(Feather)`
font-size: 25px;
color:rgba(236, 219, 182, 1);
top: 30px;
left: 10px;
background-color: red;
`

export const IconMenu = styled(Feather)`
font-size: 40px;
color: #FFF;
`
export const ContainerCart = styled.View`

`

export const IconCar = styled(Feather)`
font-size: 37px;
color: #FFF;
left: 17px;
top: 10px;

`

export const ContainerMenu = styled.View`
top: 12px;
right: 17px;
`

export const InputSearch = styled.View`
`