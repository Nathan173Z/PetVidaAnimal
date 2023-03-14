import React from 'react';
import { FlatList, Image } from 'react-native';
import { Container, Item, ImageContainer } from './styles';

const data = [
  { id: '1', uri: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg' },
  { id: '2', uri: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg' },
  { id: '3', uri: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg' },
  { id: '4', uri: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg' },
  { id: '5', uri: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg' },
];

export function Slider (){
  const renderItem = ({ item }) => (
    <Item>
      <ImageContainer>
        <Image source={{ uri: item.uri }} style={{ flex: 1 }} resizeMode="cover" />
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
};
