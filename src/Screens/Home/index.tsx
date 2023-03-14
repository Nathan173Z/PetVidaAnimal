import React from "react";
import { InputHome } from "../../components/Input";



import { 
    Header,
    Container,
    Image,
    ButtonSlide,
    ScrollView,
    ScrollIcons,
    IconImg,
} from "./styles"

export function Home(){
    return(
        <Container>
            <Header>             
                <InputHome/>
            </Header>

            <ScrollView> 
                <ButtonSlide>
                   <Image source={{uri:'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg'}}/>
                   <Image source={{uri:'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg'}}/>
                   <Image source={{uri:'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg'}}/>
                </ButtonSlide>
            </ScrollView>

            <ScrollIcons> 
                <IconImg/>
            </ScrollIcons>

        </Container>
    )
}