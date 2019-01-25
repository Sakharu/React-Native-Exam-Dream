/**
 * Bataille Navale
 * 
 * DReAM - React Native
 *
 * C'est ici qu'on va afficher différentes informations sur la partie en cours.
 * 
 * Voilà, par ordre de priorité les informations à afficher :
 * 1. Date du jour
 * 2. Le nombre de coups joués actuellement
 * 3. Le pourcentage de "touchés" par rapport au nombre de coups joués
 * 4. Le nombre de cases restantes à toucher
 */

import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';

export default class Footer extends Component {
  getdateDay = () =>
  {
    var today = new Date();
    date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
    return today.toString()
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>{new Date().toLocaleString()}   </Text>
      <Text>{this.props.nbcoups}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
