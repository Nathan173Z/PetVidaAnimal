import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes'
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from './src/Screens/Login';
import {NativeBaseProvider} from 'native-base'

import {MeuPet} from './src/Screens/MeuPet'
import { Home } from './src/Screens/Home';




export default function App() {

  return (
<NavigationContainer>
  <NativeBaseProvider>
    <AppRoutes/>
  </NativeBaseProvider>
</NavigationContainer>
  );
}