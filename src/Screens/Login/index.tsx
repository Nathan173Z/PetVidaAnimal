import React, { useState } from 'react';
import {
  Container,
  Title,
  Logo,
  Input,
  Button,
  ButtonText,
  CriarConta,
  TextCriarConta,
  ButtonLogar,
  Icon,
  ButtonTextGoogle,
} from './styles';
// import img from '../../../assets/Logo.png';
// import icon from '../../../assets/imgIcongoogle.png';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // implementar lógica de autenticação
  }

  return (
    <Container>
      <Title>Vida Animal</Title>
      {/* <Logo source={img} /> */}
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>

      </Container>

)}