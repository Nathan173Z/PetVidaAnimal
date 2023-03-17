import React from "react";
import { Slider } from "../../components/SliderHome";
import { ShowIcon } from "../../components/ShowIcon";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


import { 
    Header,
    Container,
    ScrollView,
    Text,
} from "./styles"
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import { HeaderInput } from "../../components/Header";

export function Home(){ 

    return( 
        <Container>
            <HeaderInput NameIcon='shopping-cart' IconStyle={FontAwesome5}/>
        <ScrollView>
        <Slider/>
        <ShowIcon/>
        <Card/>
        </ScrollView>

    </Container>
    )
}