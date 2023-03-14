import React from 'react';
import { FlatList, Image } from 'react-native';
import { Container, Item, ImageContainer } from './styles';


const servicemeupet = require('../../assets/pawprint.png');
const servicecachorro = require('../../assets/cachorro.png');
const servicegato = require('../../assets/gatos.png');
const servicepassaro = require('../../assets/passaro.png');
const servicepeixe = require('../../assets/peixe-carpa.png');
const serviceoutros= require('../../assets/feliz.png');



const data = [
  { id: '1', source: servicemeupet },
  { id: '2', source: servicecachorro },
  { id: '3', source: servicegato },
  { id: '4', source: servicepassaro },
  { id: '5', source: servicepeixe },
  { id: '6', source: serviceoutros },
  // outras imagens
];

export function ShowIcon() {
  const renderItem = ({ item }) => (
    <Item>
      <ImageContainer>
        <Image source={item.source} resizeMode="cover" />
      </ImageContainer>
    </Item>
  );

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
