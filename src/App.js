/**
 * Bataille Navale
 * 
 * DReAM - React Native
 *
 * Ce fichier va centraliser toutes les informations concernant la partie en cours.
 * 
 * Pensez à bien stocker et gérer toutes ces informations à la "façon React" c-à-d en utilisant Props/State.
 * Le state est déjà initialisé.
 * 
 * Des valeurs sont définies dans le fichier `./Constants` afin de faciliter leur utilisation.
 * 
 * Lorsque le joueur termine la partie, affichez une popup lui indiquant qu'il a gagné la partie.
 * Ceci doit être générique en fonction du nombre de bateaux dans la grille
 * Référez-vous à la fonction `_gameEnded` 
 * 
 */

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Alert,Text} from 'react-native';

import Header from './components/Header';
import Field from './components/Field';
import Footer from './components/Footer';
import * as Constants from './Constants';


export const resetGrille = () => {
  this.setState(
    {
      currentField: Constants.getEmptyField(),
      nbbateauxtouches:0,
      nbcoups:0
    }
  )
};

export default class App extends Component {

  state = {
    // L'état actuel de la grille
    currentField: Constants.getEmptyField(),
    nbcoups:0
  }

  nbbateaux=0;

  // Fonction à appeler une fois que l'utilisateur a gagné la partie.
 _gameEnded = () => {
    Alert.alert(
      'Jeu terminé !',
      "Super, t'as réussi !",
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    )
    this.setState(this.getInitialState());
  }



  
  /**
   * Cette fonction est déjà câblé lorsque l'utilisateur touche une des cases de la grille.
   */
  _onSquarePress = (row, column) => {
    console.log(`Square touched at row:${row} ; column:${column}`);

    // TODO: Gérer le touch pour mettre à jour la case.
    currentFieldTemporaire = this.state.currentField

      if (Constants.OPPONENT_FIELD[row][column] == Constants.OPPONENT_INFO.BOAT)
      {
        currentFieldTemporaire[row][column] = -1
      }
      else
      {
        currentFieldTemporaire[row][column] = 1
        if (parseInt(this.state.nbbateauxtouches)+1==this.nbbateaux)
        {
          this._gameEnded()
        }
        else
        {
        this.setState({
          nbbateauxtouches:parseInt(this.state.nbbateauxtouches)+1
        })
      }
      }
  
    this.setState({
      currentField:currentFieldTemporaire,
      nbcoups:parseInt(this.state.nbcoups)+1
    })
  };
 
  componentWillMount()
  {
    this.nbbateaux = Constants.OPPONENT_FIELD.reduce(function(n, val) {
        return n + (val === Constants.OPPONENT_INFO.BOAT);
    }, 0);
    
  }

  render() {
    // Destructuring des éléments du state
    const { currentField } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Field currentField={currentField} onSquarePress={this._onSquarePress}/>
        <Footer nbcoups={this.state.nbcoups}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
