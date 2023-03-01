import React from "react";
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, Input, InputArea,  } from './styles';


export function InputHome() {

  return (
    <Container>
      <InputArea>
        <Input placeholder="Buscar no VidaPet" />
      </InputArea> 
    </Container>
  )
}