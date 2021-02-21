import React from 'react';

import {
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { styles } from './style';

/**
 * A componet to show information 
 * 
 * @param {*} param0 
 * @author <haridasafiuza@gmailcom>
 */
const ViewInfo = ({}) => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Title
                    </Text>
                </View>
                <View style={styles.body}>

                </View>
                <View style={styles.footer}>

                </View>
            </View>
        </>
    );

}

export default ViewInfo;