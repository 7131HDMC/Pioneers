import React from 'react';

import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { WebView } from 'react-native-webview';

import { styles } from './style';

/**
 * A componet to show information 
 * 
 * @param {*} param0 
 * @author <haridasafiuza@gmailcom>
 */
const ViewInfo = ({isLocal=true}) => {

    return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Title da pioneiras bibiographys testeteste teste
                    </Text>
                </View>
                <View style={styles.body}>

                {
                    isLocal
                    ?
                       <WebView

                            originWhitelist={['*']}

                            source={{ html: '<style>h1{font-size: 4vmax;}</style><h1> Jujuh gatinha! </h1>' }} 
                            style={{color: '#333', fontSize: 40, backgroundColor: 'blue', width: 325, maxWidth: 350, padding: 5}}
                        />
                    :
                        <WebView
                            useWebKit={true}
                            automaticallyAdjustContentInsets={false}
                            scalesPageToFit={false}
                            javaScriptEnabled={true}
                            source={{ uri: `${constants.GET_VERSION_NOTES}${VersionNumber.appVersion}` }} 
                        />


                }

                    </View>
                <View style={styles.footer}>

                </View>
            </ScrollView>
        
    );

}

export default ViewInfo;