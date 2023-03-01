import React from "react";
import { ScrollView } from "react-native";
import { InputHome } from "../../components/Input";


import { 
    Text,
    Header
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