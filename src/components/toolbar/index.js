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

import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * A component to show a toolbar, navbar by title name
 * 
 * @param {String} title 
 * @author <haridasafiuza@gmail.com>
 */
const Toolbar = ({title, customStyle=null}) => {
    
    return (
        <>
            {/* Create a Toolbar/Header component to atomic screen and component in the project */}
            <Header>
            <Left>
                <Button transparent>
                    <Icon name="navicon" size={23} color="#fafafa" />
                </Button>
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