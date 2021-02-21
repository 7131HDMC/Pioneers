import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';

import Tree from './TreeScreen';

/**
 * Main component
 * @param {Navigator} navigation 
 */
const Main = ({navigation}) => (
  <>
      <Tree navigation={navigation}/>
  </>
);

export default Main;
