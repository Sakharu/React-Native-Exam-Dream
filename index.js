/**
 * EXAM React Native 2019
 * 
 * Le but du projet est de rendre une grille de bataille navale fonctionnelle.
 * Actuellement, le projet ne gère que l'affichage des vues.
 * 
 * Lisez bien tout jusqu'au bout.
 * 
 * L'écran principal est décomposé en 3 parties :
 * - Header : C'est la que le joueur va avoir accès à des options, comme redémarrer une partie
 * - Field : C'est le cœur de l'application, là où la grille de jeu est affichée
 *     - Square : Le Field utilise un autre composant, le Square, pour afficher une case dans la grille
 * - Footer : C'est ici qu'on va venir afficher des informations sur la partie. Il est pour l'instant vide.
 * 
 * Le point d'entrée de l'application se trouve dans `./src/App.js`
 * Chaque module se trouve dans le dossier `./src/components/`
 * 
 * Pour savoir quoi faire dans chaque fichier, allez dans le fichier correspondant et regardez l'entête.
 * Mais commencez par `./src/App.js` !
 * 
 * Faites bien attention également aux // TODO dans le code.
 * 
 * N'oubliez pas, commentez votre code !
 * 
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
