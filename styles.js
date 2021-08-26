import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    iconSignal:{
     marginTop: 10,
     justifyContent: 'center',
     alignItems: 'center',
     paddingTop: 10,
    },
    tituloSuperior:{
        color: '#000000',
        paddingTop: 10,
        fontSize: 23,
    },
    subTitulo:{
        color: '#636363',
        fontSize: 16,
    },
    tituloContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
  loading:{
      padding: 10,
  },
  container:{
    width: '98%', 
    height: 120,
    borderRadius: 14,
    marginTop: 20,
    marginLeft: 2,
    backgroundColor: '#ffffff',
    elevation: 6, 
  },
  avatarContainer:{
    flexDirection: 'row',
  },
  avatar:{
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: '#F3F3F3',
    borderRadius: 6

  },
  orgInfo:{
    flex: 1,
  },
  name:{
      fontWeight: "500",
      fontSize: 16,
      color: '#2196f3',
      marginTop: 9,
    },
  bio:{
      fontSize: 16,
      marginTop: 3,
      color: '#636363'
      
    },
    buttonContainer: {
      flexDirection: 'row',
      marginLeft: 160,
      marginTop: 10 
    },
    salvarButton: {
      backgroundColor: '#322',
      width: 50,
    },
    containerSearch:{
        marginTop: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
        marginRight: 12,    
      },
      inputArea: { 
        flexDirection: 'row',
        width: '100%',
        borderRadius: 14,
        elevation: 3,
        height: 60,
        alignItems: 'center',
             
      },
      input:{
        width: '85%',
        color: "#000",
        fontSize: 16,
        paddingLeft: 25,   
      }
  
 
})
