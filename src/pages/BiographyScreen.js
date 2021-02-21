import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';

import Toolbar from '~/components/toolbar';

import ViewInfo from '~/components/viewInfo';

/**
 * A screen to show a biography with datas passed by parametrs
 * 
 * @param {Navigator} navigation 
 * @author <haridasafiuza@gmai.com>
 */
function BiographyScreen ({navigation}) {
    
    return (
        <View>
            <Toolbar 
              title={'Pioneiras'}  
              icon='arrow-left' 
              onPress={() => goBack()}
            />
            
            <ViewInfo

            />
        </View>

    );
}

export default BiographyScreen;