/**
 * Bataille Navale
 *
 * DReAM - React Native
 * Square
 * 
 * Etape 1 : Récupérer la valeur de la case et d'afficher la bonne image.
 * Vous pouvez vous servir de la méthode `_getImageFromValue`, comme le montre le code ligne 39.
 * 
 * Etape 2 : Faire en sorte de ne remonter le onPress que si la case n'a pas déja été touchée.
 */

import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image,Alert } from "react-native";
import Images from "../assets/Images";
import * as Constants from "../Constants";

export default class Square extends Component {

  state={
    valeur:this.props.valeur
  }
  _onPress = () => {
    // Récupération des props
    const { row, column, onPress, valeur } = this.props;
    this.setState({
      valeur:valeur
    })
    //on vérifie que la case n'a pas déjà été touchée
    if (onPress && this.state.valeur==0) {
      // Passage de l'event onPress au parent, avec les coordonnées actuelles du Square
     /* Alert.alert(
        valeur.toString(),
        "Super, t'as réussi !",
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: true }
      )
      */
      onPress(row, column);
    }
  }

  /**
   * Retourne l'image associée à la valeur de la case.
   */
  _getImageFromValue = (value) => {
    switch (value) {
      case Constants.FIELD_CASE_STATUS.MISSED:
        return Images.water;
      case Constants.FIELD_CASE_STATUS.TOUCHED:
        return Images.fire;
      default:
        return null;
    }
  }

  render() {
    // TODO: Vous devez récupérer la value associée à cette case et l'afficher.
    // const imageSource = this._getImageFromValue(currentValue);
    const imageSource = this._getImageFromValue(this.state.valeur);

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
          {!!imageSource && (
            <Image
              style={styles.image}
              resizeMode="contain"
              source={imageSource}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
