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

import { MAX_WIDTH, MAX_HEIGHT, MAPPING, TREE_IMG } from './treeScreenStyle';

/**
 * A screen component to render a mapped image
 * @param {Navigator} navigation 
 */
export default function Tree({ navigation }) {
  return (

    <Container>
      {/* Create a Toolbar/Header component to atomic screen and component in the project */}
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Pioneiras</Title>
        </Body>
        <Right />
      </Header>

      {/*Mapped area*/}
      <ImageMapper
        imgHeight={MAX_HEIGHT}
        imgWidth={MAX_WIDTH}
        imgMap={MAPPING}
        imgSource={TREE_IMG}
        onPress={(item, idx, event) =>
          navigation.navigate('List', { part: item.name })
        }
      />
    </Container>
  );
}
