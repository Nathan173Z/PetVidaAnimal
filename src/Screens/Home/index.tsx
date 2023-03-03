import React from "react";
import { ScrollView } from "react-native";
import { Octicons, FontAwesome5 } from '@expo/vector-icons'; 
import { InputHome } from "../../components/Input";
import { Feather } from '@expo/vector-icons';


import { 
    Text,
    Header,

} from "./styles"

export function Home(){
    return(
        <ScrollView>
            <Header>             
                <InputHome/>                                                  
            </Header>
        </ScrollView>
    )
}