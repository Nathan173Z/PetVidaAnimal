import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  background-color: #009688;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const CriarConta = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const TextCriarConta = styled.Text`
  margin-right: 10px;
  color: #009688;
`;

export const ButtonLogar = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const ButtonTextGoogle = styled.Text`
  color: #000;
`;
