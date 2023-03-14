import React from 'react';
import { FlatList, Image } from 'react-native';
import { Container, Item, ImageContainer } from './styles';

const serviceImage = require('../../assets/1.png');

const data = [
  { id: '1', source: serviceImage },
  { id: '2', source: serviceImage },
  // outras imagens
];

export function ShowIcon() {
  const renderItem = ({ item }) => (
    <Item>
      <ImageContainer>
        <Image source={item.source} style={{ flex: 1 }} resizeMode="cover" />
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
