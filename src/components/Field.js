/**
 * Bataille Navale
 * 
 * DReAM - React Native
 * Field
 * 
 * L'objectif ici est simple : vous devez afficher l'état actuel de la grille au fur et à mesure des actions de l'utilisateur.
 * Regardez dans le fichier `../Constants` pour savoir les différents états possibles.
 * 
 * Dans un premier temps, ne vous préoccupez pas du style, car tout est géré pour vous.
 * S'il vous reste du temps, vous pouvez bien entendu rendre cette grille un peu plus jolie :)
 */

import React, { Component } from 'react';
import { StyleSheet, View,Alert } from 'react-native';

import * as Constants from '../Constants';

import Square from './Square';

const padding = 10;

export default class Field extends Component {
  render() {
    // On récupère les valeurs actuelles grace aux props, et au `currentField`
    const { currentField, onSquarePress } = this.props;

    // Ici on fait en sorte d'avoir la grille qui prend toute la largeur de l'écran (modulo le padding)
    const squareSize = (Constants.screenWidth - 2*padding) / currentField.length;
   /* Alert.alert(
      currentField.toString(),
      "Super, t'as réussi !",
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    )
    */
    return (
      
      <View style={styles.container}>
        {/* Parcours de toutes les lignes */}
        {currentField.map((rowValues, rowIndex) => (

          // Création d'une vue qui va encapsuler la ligne
          <View key={rowIndex} style={[styles.row, { height: squareSize }]}>

            {/* Parcours de toutes les cases de la ligne actuelle */}
            {rowValues.map((value, columnIndex) => (

              // Création d'une vue qui va encapsuler la valeur actuelle
              // TODO: Afficher la valeur dans le square
              <Square key={columnIndex} row={rowIndex} column={columnIndex} onPress={onSquarePress} valeur={value}/>
            ))}
          </View>
        ))}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
