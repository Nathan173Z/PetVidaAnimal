import React from "react";
import { InputHome } from "../../components/Input"; 
import { Ionicons } from '@expo/vector-icons'; 

import { 
    Header,
    Container,
    Title,
    IconMais,
    ContainerIcon,
} from "./styles"
import { CardMeuPet } from "../../components/CardMeuPet";

export function MeuPet(){ 
    return( 
    <Container>
        <Header>             
           <InputHome/>
        </Header>     
    <ContainerIcon>
     <Title> 
        Meus Pets
     </Title>
        <IconMais name="add-circle-outline" size={30} color="black" />
    </ContainerIcon>
     <CardMeuPet/>
    </Container>
    )
}