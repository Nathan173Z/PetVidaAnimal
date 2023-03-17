import { background } from 'native-base/lib/typescript/theme/styled-system';
import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f3ead5',
  },
  logo: {
    width: 232,
    height: 242,
    marginTop:40,
    marginBottom:29,
    
  },
  title: {
    fontSize: 55,
    color: '#10abd4',
    textShadowColor: '#00000029',
    textShadowOffset: { width: 0, height: 10 },
    textShadowRadius: 6,
    marginBottom:16,
    
  },
  input: {
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#ffff',
    backgroundColor:'#ffff',
    borderRadius: 10,
    paddingHorizontal: 17,
    marginBottom: 20,
    fontSize: 14,
    color:'#ABA2A2'
  },
  form:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:15,
 },
  buttonsalvar: {
    
    height: 40,
    backgroundColor: '#10ABD43D',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:26,
    
    
  },
  buttoncancelar: {
    marginLeft:70,
    height: 40,
    backgroundColor: '#FF77003D',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:26,
    
  },


  buttonTextSalvar: {
    fontWeight: 'bold',
    color: '#10abd4',
    fontSize: 14,
    paddingHorizontal: 30,
    
  },
  buttonTextCancelar: {
    fontWeight: 'bold',
    color: '#FF7700',
    fontSize: 14,
    paddingHorizontal: 30,
    
  },


  
});
