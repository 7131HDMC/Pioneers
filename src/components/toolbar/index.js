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
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './style';

/**
 * A component to show a toolbar, navbar by title name
 * 
 * @param {String} title 
 * @param {String} icon name from Feather Class
 * @param {Function} onPress action to do when click on icon
 * @param {StyleSheet} customStyle tyle to vustomize the component item

 * @author <haridasafiuza@gmail.com>
 */
const Toolbar = ({title, icon,onPress,customStyle=null}) => {
    
    return (
        <>
            {/* Create a Toolbar/Header component to atomic screen and component in the project */}
            <Header>
            <Left>
                <View>
                    <TouchableOpacity onPress={onPress}>
                        <Icon name={icon} size={25} color="#333" />
                    </TouchableOpacity>
                </View>
            </Left>
            <Body style={styles.title}>
                <Title>{title}</Title>
            </Body>
            <Right />
            </Header>
        </>
    );
} 

export default Toolbar;