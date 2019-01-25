/**
 * Bataille Navale
 * 
 * DReAM - React Native
 * Constants.
 * 
 * C'est ici que sont stockées toutes les constantes utiles au projet.
 * Vous DEVEZ les utiliser au maximum, plutôt que d'utiliser des valeurs entières directement.
 */

 import { Dimensions } from 'react-native';

// Get the screen dimensions in Point
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export { screenWidth, screenHeight };

// Information sur une case de jeu, Cf `EMPTY_FIELD`
export const FIELD_CASE_STATUS = {
  UNKNOW : 0,
  MISSED : -1,
  TOUCHED : 1,
}

export const FIELD_SIZE = 10;

// Génère la grille de démarrage, toutes les cases sont inconnues
export const getEmptyField = () => {
  const field = [];
  for (let i = 0; i < FIELD_SIZE; i++) {
    const row = [];
    for (let j=0; j < FIELD_SIZE; j++) {
      row.push(FIELD_CASE_STATUS.UNKNOW); 
    }
    field.push(row);
  }
  return field;
};

// Informations sur ce que peut être chaque case. Cf `OPPONENT_FIELD`
export const OPPONENT_INFO = {
  WATER : 0,
  BOAT : 1,
}

// Un exemple de placement des bateau adverses
export const OPPONENT_FIELD = [
// A B C D E F G H I J   
  [0,0,0,0,0,0,0,0,0,0], // 1
  [0,0,0,0,0,0,0,0,0,0], // 2
  [0,0,0,0,0,1,0,0,0,0], // 3
  [0,0,0,0,0,1,0,0,0,0], // 4
  [0,0,0,0,0,1,0,0,1,0], // 5
  [0,0,0,0,0,0,0,0,1,0], // 6
  [0,0,0,0,0,0,0,0,0,0], // 7
  [0,0,0,0,0,0,0,0,0,0], // 8
  [0,0,1,1,1,1,0,0,0,0], // 9
  [0,0,0,0,0,0,0,0,0,0], // 10
]
  
  