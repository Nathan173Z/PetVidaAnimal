import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Item, ImageContainer } from './styles';


const servicemeupet = require('../../assets/pawprint.png');
const servicecachorro = require('../../assets/cachorro.png');
const servicegato = require('../../assets/gatos.png');
const servicepassaro = require('../../assets/passaro.png');
const servicepeixe = require('../../assets/peixe-carpa.png');
const serviceoutros= require('../../assets/feliz.png');



const data = [
  { id: '1', source: servicemeupet, title: 'Meu Pet' },
  { id: '2', source: servicecachorro, title: 'Cachorro' },
  { id: '3', source: servicegato, title: 'Gato' },
  { id: '4', source: servicepassaro, title: 'Pássaro' },
  { id: '5', source: servicepeixe, title: 'Peixe' },
  { id: '6', source: serviceoutros, title: 'Outros' },
  // outras imagens
];


export function ShowIcon() {
  const navigation = useNavigation();

  const handleServicePress = (serviceId, title ) => {
    navigation.navigate(`Serviço ${serviceId}`);
  };

  const renderItem = ({ item }) => (
    <Item>
      <TouchableOpacity onPress={() => handleServicePress(item.id, item.title)}>
        <ImageContainer>
          <Image source={item.source} resizeMode="cover" />
        </ImageContainer>
      </TouchableOpacity>
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
