import React from 'react';

import {
    Image,
    View,
    Text,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { styles } from './style';

/**
 * A component to show a item
 * 
 * @param {String} title Section title
 * @param {String} resume Section description
 * @param {NodeRequire} avatar image source
 * @param {Function} action function to do when click 
 * @param customStyle tyle to vustomize the component item
 * 
 * @author <haridasafiuza@gmail.com>
 */
const SectionInfo = ({title , resume='', avatar, onPress,customStyle=null}) => {

    return (
        <>
            <TouchableHighlight style={styles.area} onPress={() => onPress}>
                <View style={styles.container}>
                    <View style={styles.avatar}>
                        <Image 
                            source={avatar}
                            style={styles.circle}
                        />
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        {/**Need treat maximum carachters to item descritions */}
                        <Text style={styles.subtitle}>
                            {resume}
                        </Text>

                    </View>
                </View>
            </TouchableHighlight>
        </>
    );

}
export default SectionInfo;