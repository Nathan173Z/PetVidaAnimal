import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Embreve } from '../Screens/Embreve'

import { Home } from '../Screens/Home'
import { MeuPet } from '../Screens/Meupet'

const { Navigator, Screen, Group} = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
      <Screen name='Home' component={Home} />
      <Screen name="Serviço 1" component={MeuPet} />
      <Screen name="Serviço 2" component={Embreve} />
      <Screen name="Serviço 3" component={Embreve} />
      <Screen name="Serviço 4" component={Embreve} />
      <Screen name="Serviço 5" component={Embreve} />
      <Screen name="Serviço 6" component={Embreve} />
      </Group>
    </Navigator>
  )
}