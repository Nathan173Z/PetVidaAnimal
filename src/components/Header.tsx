import {HStack, Input, Icon, IconButton} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {Alert} from 'react-native'



export function HeaderInput(){
  

  return(
    <HStack h="60px" bg="#10ABD4" w="full"  alignItems="center" justifyContent="center" top="5">
      <IconButton 
        variant="ghost" 
        size="lg" 
        borderRadius="full"
        _icon={{
          as: FontAwesome5,
          name: "shopping-cart",
          color: "white",
          size: "xl"
        }}
          
        />
      <Input 
        variant="rounded" w="294px" 
        InputLeftElement={<Icon as={<MaterialIcons name="search" color="black" />} 
          size={5} 
          ml={4} 
          color="#rgb(236,219,182)"/>} 
        placeholder="Buscar no vida pet" fontSize="14px" 
        placeholderTextColor="#rgb(236,219,182)"
        color="gray.700"
        backgroundColor="white"
        h="40px"
      />

      <IconButton 
        variant="ghost" 
        size="lg" 
        borderRadius="full"
        _icon={{
          as: MaterialIcons,
          name: "menu",
          color: "white",
          size: "xl"
        }}
        
          
      />

    </HStack>
  )
}