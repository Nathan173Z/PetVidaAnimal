import React from "react";
import { useNavigation } from '@react-navigation/native'

import { 
  Container, 
  Input, IconMenu, 
  ContainerMenu,
  IconCar, 
  ContainerCart, 
  InputSearch, 
  IconSearch,
  Button} from './styles';

export function Inputcallback({}) {
  const navigation = useNavigation()

  function Goback() {
    navigation.navigate('Home')
  }

  return (
    <Container>

      <ContainerCart>
          <IconCar name="arrowleft" onPress={Goback} />
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