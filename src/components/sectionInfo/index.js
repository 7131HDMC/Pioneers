import React from 'react';

import {
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { styles } from './style';

/**
 * A component to show a item
 * 
 * @param {String} title Section title
 * @param {String} resume Section description
 * @param {NodeRequire} avatar image source
 * @param {Function} action function to do when click 
 * @param {StyleSheet} customStyle tyle to vustomize the component item
 * 
 * @author <haridasafiuza@gmail.com>
 */
const SectionInfo = ({title , resume='', avatar, onPress,customStyle=null}) => {

    return (
        <>
            <TouchableOpacity style={styles.area} onPress={() => console.log('teste')}>
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
            </TouchableOpacity>
        </>
    );

}
export default SectionInfo;