import React from 'react';

import {
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { Background } from '~/components/Background';
import {styles} from './style';
export function SectionDetails()
{
    return (
        <Background primary="#333" secondary="#fff">
            <View style={styles.container}>
                <Text>OLÄ</Text>

            </View>
        </Background>
    );
}
