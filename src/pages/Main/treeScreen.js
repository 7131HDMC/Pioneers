import React from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';

import ImageMapper from 'react-native-image-mapper';

import { MAX_WIDTH, MAX_HEIGHT, MAPPING, TREE_IMG } from './TreeScreenStyle';

import Toolbar from '~/components/toolbar';

/**
 * A screen component to render a mapped image
 * @param {Navigator} navigation 
 * @author <haridasafiuza@gmail.com>
 *
 * */
export default function Tree({ navigation }) {
  return (

    <Container>

      <Toolbar title={'Pioneiras'}/>

      {/*Mapped area*/}
      <ImageMapper
        imgHeight={MAX_HEIGHT}
        imgWidth={MAX_WIDTH}
        imgMap={MAPPING}
        imgSource={TREE_IMG}
        onPress={(item, idx, event) => { 
          console.log('DEBUG')
          navigation.navigate('ListScreen', { part: item.name })
        }
          // navigation.navigate('List', { part: item.name })
        }
      />
    </Container>
  );
}
