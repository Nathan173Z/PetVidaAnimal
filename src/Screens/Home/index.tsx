import React from "react";
import { InputHome } from "../../components/Input";
import { Slider } from "../../components/SliderHome";
import { ShowIcon } from "../../components/ShowIcon";



import { 
    Header,
    Container,
    Lista,
} from "./styles"

export function Home(){ 
    return( 
        <Container>
        <Header>             
            <InputHome/>
        </Header>

        <Slider/>
        <ShowIcon/>

    </Container>
    )
}