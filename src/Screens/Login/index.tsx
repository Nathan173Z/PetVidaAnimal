import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles'
import img from '../../assets/Logo.png'
import { useNavigation } from "@react-navigation/native";
import Icon from '../../assets/imgIcongoogle.png'
import {Alert} from 'react-native';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

    function HadleLogin() {
        navigation.navigate('Home')
      }

    function HadleCadastrar() {
        navigation.navigate('Cadastrar')
      }

      function AlertLogin (){ 
        Alert.alert('ATENÇÃO', 'VÁ PARA ENTRAR SEM CADASTRO')
      }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vida Animal</Text>
      <Image source={img} style={styles.logo} />
      <TextInput 
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
          <Text style={styles.esquciminhasenha}>ESQUECI MINHA SENHA </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText } onPress={AlertLogin}>ENTRAR</Text>
      </TouchableOpacity>

      <View style={styles.criarconta}>
        <TouchableOpacity>
          <Text style={styles.textcriaraconta} onPress={HadleCadastrar}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textcriaraconta} onPress={HadleLogin}>
            ENTRAR SEM CADASTRO
          </Text>
        </TouchableOpacity>
      </View>
     
      <TouchableOpacity style={styles.buttonlogar} >
        <Image source={Icon} style={styles.icon} />
        <Text style={styles.buttonTextgoogle}>Logar com o Google</Text>
      </TouchableOpacity>
     
      
    </View>
  );
}

