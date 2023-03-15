import React from 'react'
import Img from '../../assets/dog1.png'

import { 
    Container,
    ContainerInfo,
    ContainerText,
    Image,
    Title,
    Info,
} from './styles'
export function CardMeuPet(){
    return( 
        <Container>
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