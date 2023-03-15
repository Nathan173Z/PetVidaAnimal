import React from 'react'

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
                <Image source={{uri:'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRPMKnq00NF_T7RusUNeLrSazRZM0S5O8_AOcw2iBTmYTxd3Q7uXf0sW41odpAKqSblKDMUMHGb8nZRo9g'}}/>
            </ContainerInfo> 
            
            <ContainerText>
              <Title>Apolo</Title> 
              <Info>Espécie:Cão</Info>
              <Info>Beagle | Macho | 4 Meses</Info>
            </ContainerText>
        </Container>
    )
}