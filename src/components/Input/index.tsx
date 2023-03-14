import React from "react";
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Octicons } from '@expo/vector-icons'; 

import { Container, Input, IconMenu, ContainerMenu,IconCar, ContainerCart, InputSearch, IconSearch,Button} from './styles';

export function InputHome() {

  return (
    <Container>

      <ContainerCart>
         <IconCar name="shopping-cart"/>
      </ContainerCart>


        <InputSearch>
           <Input placeholder="Buscar no VidaPet"/>
           <Button>
           <IconSearch name="search" /> 
           </Button>
        </InputSearch>


      <ContainerMenu> 
        <IconMenu name="menu"/>
      </ContainerMenu>


     
    </Container>
  )
}