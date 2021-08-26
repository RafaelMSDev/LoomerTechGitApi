import React, { Component, useState } from 'react';
import { View, TextInput, TouchableOpacity} from 'react-native';
import { useFonts, Arimo_500Medium} from '@expo-google-fonts/arimo';
import { AppLoading } from 'expo';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';




class PromotionFormSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { modalVisible: true }
  }
  
  render() {
    
    
    return(
     
      <View style={styles.container}> 
          <View style={styles.inputArea}>
            <TextInput
            style={styles.input}
            placeholder="Procurar organizações..."         
            />
            <TouchableOpacity style={styles.icon}>
            <Ionicons name="search-outline" color="#707070" size={20} paddingRight={-10} />              
            </TouchableOpacity>
          </View>
      </View>  
    )
  }
}

export default PromotionFormSearch
