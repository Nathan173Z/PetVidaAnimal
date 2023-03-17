import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Embreve } from '../Screens/Embreve'

import { Home } from '../Screens/Home'
import { TelaMeuPet } from '../Screens/TelaMeuPet'
import {MeuPet} from '../Screens/MeuPet'
import { Banho } from '../Screens/Banho'
import { LoginScreen } from '../Screens/Login'
import Cadastrar from '../Screens/Cadastrar'


const { Navigator, Screen, Group} = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
      <Screen name="LoginScreen" component={LoginScreen}/>
      <Screen name="Cadastrar" component={Cadastrar}/>
      <Screen name='Home' component={Home} />
      <Screen name="Serviço 1" component={TelaMeuPet} />
      <Screen name="MeuPet" component={MeuPet} />
      <Screen name="Banho" component={Banho}/>
      <Screen name="Serviço 3" component={Embreve} />
      <Screen name="Serviço 4" component={Embreve} />
      <Screen name="Serviço 5" component={Embreve} />
      <Screen name="Serviço 6" component={Embreve} />
      </Group>
    </Navigator>
  )
}