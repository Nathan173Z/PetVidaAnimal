import { Ionicons  } from '@expo/vector-icons'; 
import styled from 'styled-components/native'

export const Header = styled.View`
background-color: #10ABD4;
width: 100%;
height: 70px;
`

export const Container = styled.View`
background-color: #F3EAD5;
height: 100%;
`

export const Title= styled.Text`
font-size: 30px;
text-align: center;
top: 11px;
`

export const IconMais = styled(Ionicons)`
left: 10px;
top: 10px;
font-size: 40px;
`
export const ContainerIcon = styled.TouchableOpacity`
flex-direction: row;
width: 200px;
align-items: center;
margin-left: 105px;
`