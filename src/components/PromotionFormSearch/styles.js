import { StyleSheet } from 'react-native'
import { useFonts, Arimo_500Medium} from '@expo-google-fonts/arimo';




export default StyleSheet.create({

  
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',  
   
  },
  inputArea: { 
    flexDirection: 'row',
    width: '100%',
    borderRadius: 14,

    opacity: 1,
    elevation: 5,
    height: 60,
    alignItems: 'center',
         
  },
  input:{
    width: '85%',
    color: "#FFF",
    fontSize: 16,
    paddingLeft: 25,   
  }
});