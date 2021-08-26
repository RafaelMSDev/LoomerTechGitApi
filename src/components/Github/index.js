import React, { Component, useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Button } from 'react-native-elements';
import styles from '../../components/Github/style'
import Icon from 'react-native-vector-icons/FontAwesome';



class Gitlist extends Component {
    
  

  render() {

    return(
      <View style={styles.container}> 
        <View style={styles.avatarContainer}>
        <Image
        style={styles.avatar}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />

      <View style={styles.orgInfo}>
        <Text style={styles.name}>React Community</Text>
        <Text style={styles.bio}>React website and its localizations</Text>

        <View style={styles.buttonContainer}> 
        <Button
        icon={
          <Icon
          name="bookmark"
          size={18}
          color="#2196f3"
        />
      }
        size={18}
        title="  Salvar"
        type="outline"
        />
          </View>
        </View>
      </View>
    </View>
      
    )
  }
};

export default Gitlist;


