import React from "react";
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Octicons } from '@expo/vector-icons'; 

import { Container, Input, InputArea, IconSearch, Icon, IconMenu, ContainerIcon } from './styles';


export function InputHome() {

  return (
    <Container>
      <InputArea>
        <Input placeholder="Buscar no VidaPet" />
        
        <IconSearch>
        <Icon name="search"  />
        </IconSearch>
        
      </InputArea> 

      
    </Container>
  )
}