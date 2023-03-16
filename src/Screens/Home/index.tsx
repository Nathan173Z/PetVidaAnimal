import React from "react";
import { InputHome } from "../../components/Input";
import { Slider } from "../../components/SliderHome";
import { ShowIcon } from "../../components/ShowIcon";
import { useNavigation } from "@react-navigation/native";


import { 
    Header,
    Container,
    ScrollView,
    Text,
} from "./styles"
import { Card } from "../../components/Card";

export function Home(){ 

    return( 
        <Container>
        <Header>             
            <InputHome/>
        </Header>

        <ScrollView>
        <Slider/>
        <ShowIcon/>
        <Card/>
        </ScrollView>

    </Container>
    )
}