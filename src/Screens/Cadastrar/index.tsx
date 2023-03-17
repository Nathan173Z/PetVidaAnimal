import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles'
import img from '../../assets/Logo.png'
import { useNavigation } from "@react-navigation/native";

export default function Cadastrar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function HadleGoBack() {
      navigation.navigate('LoginScreen')
    }



  return (
    <View style={styles.container}>
      <Image source={img} style={styles.logo} />

      <Text style={styles.title}>Cadastro</Text>

      <TextInput 
        style={styles.input}
        placeholder="Nome"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input}
        placeholder="E-mail"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput 
        style={styles.input}
        placeholder="CPF"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput 
        style={styles.input}
        placeholder="Confirm Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
    
    <View style={styles.form}>

      <TouchableOpacity style={styles.buttonsalvar} >
        <Text style={styles.buttonTextSalvar}>Confirmar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttoncancelar} >
        <Text style={styles.buttonTextCancelar} onPress={HadleGoBack}>Cancelar</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}

