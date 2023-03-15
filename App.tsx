import React from 'react'
import { StatusBar } from 'react-native';
import { Home } from './src/Screens/Home'
import { MeuPet } from './src/Screens/Meupet';

export default function App(){ 
  return (
    <>
       <StatusBar 
        backgroundColor="black" 
      />
    <MeuPet/>
    </>
  )
}