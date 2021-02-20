import React from 'react';

import {
    Image,
    View,
    Text,
} from 'react-native';

import { styles } from './style';

/**
 * A component to show a item
 * 
 * @param {}  
 */
const SectionInfo = ({title , resume='', avatar, customStyle=null}) => {

    return (
        <>
            <View style={styles.area}>
                <View style={styles.container}>
                    <View style={styles.avatar}>
                        <Text>{avatar}</Text>
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
            </View>
        </>
    );

}
export default SectionInfo;