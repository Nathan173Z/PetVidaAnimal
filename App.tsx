import React from 'react'
import { StatusBar } from 'react-native';
import { Home } from './src/Screens/Home'

export default function App(){ 
  return (
    <>
       <StatusBar 
        backgroundColor="black" 
      />
    <Home/>
    </>
  )
}