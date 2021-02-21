import React from 'react';

import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
} from 'native-base';


import {
    View,
} from 'react-native';

import { TouchableHighlight } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

/**
 * A component to show a toolbar, navbar by title name
 * 
 * @param {String} title 
 * @author <haridasafiuza@gmail.com>
 */
const Toolbar = ({title, onPress,customStyle=null}) => {
    
    return (
        <>
            {/* Create a Toolbar/Header component to atomic screen and component in the project */}
            <Header>
            <Left>
                <View style={{ height: 40 }}>
                    <TouchableHighlight style={{ marginLeft: 2, width: 60 }} onPress={onPress}>
                        <Icon name="arrow-left" size={25} color="#222" />
                    </TouchableHighlight>
                </View>
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right />
            </Header>
        </>
    );
} 

export default Toolbar;