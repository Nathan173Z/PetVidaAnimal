import React from "react";
import { InputHome } from "../../components/Input"; 
import { 
    Header,
    Container,
    Aviso,
} from "./styles"

export function Embreve(){ 
    return( 
    <Container>
        <Header>             
           <InputHome/>
        </Header>
        <Aviso source={{uri:'https://agua.org.br/novosite/wp-content/uploads/2019/07/pagina-em-constru%C3%A7%C3%A3o.png'}}/>
    </Container>
    )
}