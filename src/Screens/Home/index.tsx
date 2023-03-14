import React from "react";
import { InputHome } from "../../components/Input";
import { Slider } from "../../components/SliderHome";
import { ShowIcon } from "../../components/ShowIcon";



import { 
    Header,
    Container,
    Card,
    ScrollView,
} from "./styles"

export function Home(){ 
    return( 
        <Container>
        <Header>             
            <InputHome/>
        </Header>


        <ScrollView>
        <Slider/>
        <ShowIcon/>
            <Card> 

            </Card>
        </ScrollView>

    </Container>
    )
}