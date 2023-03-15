import React from "react";
import { ItemSeparator } from "../ItemSeparator";
import ração from '../../assets/ração.png'

import{ 
    Container,
    Title,
    Products,
    Imagem,
    Price,
    Info,
    ProductsTitle,
    ContainerInfo,
    InfoProdutcs,
    TextVerMais,
    ContainerComo,
    InfoComo,

} from './styles'

export function Card(){ 
    return( 
        <Container> 
            <Title>Inspirado no último visto</Title>
            <ItemSeparator/>
        <InfoProdutcs>
            <Products> 
                <Imagem source={ração}/>
            </Products>

            <ContainerInfo> 
            <ProductsTitle>Ração Pedigree Vital Pro para Cães  
                    Adultos a Partir de 12 Meses de Idade Sabor Carne. </ProductsTitle>
                    <Price>R$ 100,00</Price>
                    <Info>Em 3x R$ 33,33 sem juros</Info>
            </ContainerInfo>
        </InfoProdutcs>
        <ItemSeparator/>

        <InfoProdutcs>
            <Products> 
                <Imagem source={ração}/>
            </Products>

            <ContainerInfo> 
            <ProductsTitle>Ração Pedigree Vital Pro para Cães  
                    Adultos a Partir de 12 Meses de Idade Sabor Carne. </ProductsTitle>
                    <Price>R$ 100,00</Price>
                    <Info>Em 3x R$ 33,33 sem juros</Info>
            </ContainerInfo>
        </InfoProdutcs>
        <ItemSeparator/>

        <InfoProdutcs>
            <Products> 
                <Imagem source={ração}/>
            </Products>

            <ContainerInfo> 
            <ProductsTitle>Ração Pedigree Vital Pro para Cães  
                    Adultos a Partir de 12 Meses de Idade Sabor Carne. </ProductsTitle>
                    <Price>R$ 100,00</Price>
                    <Info>Em 3x R$ 33,33 sem juros</Info>
            </ContainerInfo>
        </InfoProdutcs>
        <ItemSeparator/>

        <InfoProdutcs>
            <Products> 
                <Imagem source={ração}/>
            </Products>

            <ContainerInfo> 
            <ProductsTitle>Ração Pedigree Vital Pro para Cães  
                    Adultos a Partir de 12 Meses de Idade Sabor Carne. </ProductsTitle>
                    <Price>R$ 100,00</Price>
                    <Info>Em 3x R$ 33,33 sem juros</Info>
            </ContainerInfo>
        </InfoProdutcs>
        <ItemSeparator/>

        <InfoProdutcs>
            <Products> 
                <Imagem source={ração}/>
            </Products>

            <ContainerInfo> 
            <ProductsTitle>Ração Pedigree Vital Pro para Cães  
                    Adultos a Partir de 12 Meses de Idade Sabor Carne. </ProductsTitle>
                    <Price>R$ 100,00</Price>
                    <Info>Em 3x R$ 33,33 sem juros</Info>
            </ContainerInfo>
        </InfoProdutcs>
        <ItemSeparator/>

        <TextVerMais>Ver Mais</TextVerMais>  

        <ContainerComo> 
            <InfoComo> Para sua comodidade</InfoComo>
        </ContainerComo> 

        </Container>
    )
}