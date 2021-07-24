import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';

import Tree from '../Tree';

/**
 * Main component
 * @param {Navigator} navigation 
 */
const Home = ({navigation}) => (
  <>
      <Tree navigation={navigation}/>
  </>
);

export default Home;
