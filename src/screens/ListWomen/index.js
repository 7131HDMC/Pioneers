import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import {styles} from './style';

import Toolbar from '~/components/toolbar';

import {PIOONERS_TREE} from '~/assets/main/appImages';

import SectionInfo  from "~/components/sectionInfo";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
  ];


/**
 * A screen to list all itens filtered by params type and capture colection from persistence mode
 * 
 * @param {Navigator} navigation 
 * 
 * @author <haridasafiuza@gmail.com>
 */
function ListWomen ({ navigation }) {

    const renderItem = ({ item }) => (
      <SectionInfo 
        title={navigation.state.params.part} 
        resume={item.bio}
        avatar={PIOONERS_TREE}
        onPress={() => navigation.navigate('SectionDetails')}
        />
      );

    const goBack = () => {
      navigation.navigate('Home');
    }

   return ( 
        <View style={styles.safe}>
                              
            <Toolbar 
              title={navigation.state.params.part}  
              icon='arrow-left' 
              onPress={() => goBack()}
            />

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />


        </View>
   );
}

export default ListWomen;
