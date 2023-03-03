import React from "react";
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Octicons } from '@expo/vector-icons'; 

import { Container, Input, InputArea, Icon, IconMenu, ContainerMenu,IconCar, ContainerCart, InputSearch} from './styles';


export function InputHome() {

  return (
    <Container>

      <ContainerCart>
         <IconCar name="shopping-cart"/>
      </ContainerCart>

      <InputArea> 
        <InputSearch>
           <Icon name="search"/>
           <Input placeholder="Buscar no VidaPet"/> 
        </InputSearch>
      </InputArea> 

      <ContainerMenu> 
        <IconMenu name="menu"/>
      </ContainerMenu>


     
    </Container>
  )
}