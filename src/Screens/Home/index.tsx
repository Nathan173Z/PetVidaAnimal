import React from "react";
import { ScrollView } from "react-native";
import { Octicons, FontAwesome5 } from '@expo/vector-icons'; 
import { InputHome } from "../../components/Input";


import { 
    Text,
    Header,
    IconCar,
    ContainerInput
} from "./styles"

export function Home(){
    return(
        <ScrollView>
            <Header>
                <IconCar>
                <FontAwesome5 name="shopping-cart" size={27} color="#FFFFFF" />
                </IconCar>

                <ContainerInput>
                <InputHome/>
                
                </ContainerInput>
           
                
            </Header>
        </ScrollView>
    )
}