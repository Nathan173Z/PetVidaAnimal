import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f3ead5',
  },
  title: {
    fontSize: 55,
    color: '#10abd4',
    textShadowColor: '#00000029',
    textShadowOffset: { width: 0, height: 10 },
    textShadowRadius: 6,
    marginTop:40,
    
  },
  logo: {
    width: 232,
    height: 242,
    marginTop:21,
    marginBottom:64,
    
  },
  input: {
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#ffff',
    backgroundColor:'#ffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 30,
  },
  esquciminhasenha: {
    width: 330,
    paddingHorizontal: 10,
    marginBottom: 38,
    fontSize: 7,
    color: '#FF7700',
  },
  criarconta: {
    width: 330,
    height: 60,
    flexDirection:'row',
    paddingHorizontal: 10,
    marginBottom: 32,
    justifyContent:'space-between'
  },
  textcriaraconta: {
    fontSize: 12,
    color: '#10abd4', 
  },
  button: {
    width: 332,
    height: 50,
    backgroundColor: '#ffff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:26,
    
  },
  buttonlogar: {
    color: '#0000',
    width: 332,
    height: 50,
    backgroundColor: '#ffff',
    borderRadius: 30,
    flexDirection:'row',
    paddingHorizontal: 15,
    alignItems:'center',
    bottom:30,
  },
  icon: {
    width: 30,
    height: 30,
    alignItems:'center'
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#10abd4',
    fontSize: 23,
    paddingHorizontal: 30,
    
  },
  buttonTextgoogle: {
    fontWeight: 'bold',
    color: '#70707070',
    fontSize: 18,
    paddingHorizontal: 30,
    left:20,
    
  },
  
});
