/**
 * Bataille Navale
 * 
 * DReAM - React Native
 * Header
 *
 * C'est ici que l'utilisateur va pouvoir redémarrer une partie.
 * 
 * Etape 1 : Faire en sorte de redémarrer la partie en réinitialisant les touches de l'utilisateur.
 * Etape 2 : Faire en sorte d'avoir plusieurs modèles de grilles et d'en utiliser une au hasard à chaque lancement (cf le modules `../Constants`)
 * 
 */

import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import App from '../App';
 

export default class Header extends Component {
  render() {

    return (

      <View style={styles.container}>
        <Button onPress={() => { 
          // Immediately reload the React Native Bundle
          
        }} title="Nouvelle partie" />
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
