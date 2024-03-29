import React from "react";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 }from '@expo/vector-icons';

import { 
    Header,
    Container,
    Title,
    IconMais,
    ContainerIcon,
} from "./styles"
import { CardMeuPet } from "../../components/CardMeuPet";
import { ItemSeparator } from "../../components/ItemSeparator";
import { Inputcallback } from "../../components/Inputcallback";
import { HeaderInput } from "../../components/Header";

export function TelaMeuPet(){ 
    return( 
    <Container>
        <Header>             
           <Inputcallback />
        </Header>
    <ContainerIcon>
     <Title> 
        Meus Pets
     </Title>
        <IconMais name="add-circle-outline" size={30} color="black" />
    </ContainerIcon>
    <ItemSeparator/>     
     <CardMeuPet/>
    </Container>
    )
}