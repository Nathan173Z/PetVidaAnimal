import React from 'react'
import Img from '../../assets/dog1.png'
import { useNavigation } from "@react-navigation/native";


import { 
    Container,
    ContainerInfo,
    ContainerText,
    Image,
    Title,
    Info,
} from './styles'
export function CardMeuPet(){

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('MeuPet')
      }
    

    return( 
        <Container onPress={handleSignIn}>
            <ContainerInfo>
                <Image source={Img}/>
            </ContainerInfo> 
            
            <ContainerText>
              <Title>Apolo</Title> 
              <Info>Espécie:Cão</Info>
              <Info>Beagle | Macho | 4 Meses</Info>
            </ContainerText>
        </Container>
    )
}