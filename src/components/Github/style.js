import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  
  container:{ 
    height: 120,
    borderRadius: 14,
    marginTop: 27,
    marginLeft: 20,
    marginRight: 20,
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
      marginLeft: 180,
      marginTop: 10,
    },
    salvarButton: {
      backgroundColor: '#322',
      width: 50,
    },
})