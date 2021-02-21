import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    View,
    Text,
    FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {styles} from './styles/ListScreenStyle';

import Toolbar from '~/components/toolbar';

import {LOGO} from '~/assets/main/appImages';

import SectionInfo  from "~/components/sectionInfo";
import Icon from 'react-native-vector-icons/Feather';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
    //   title: 'First Hari Item',
    // },
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
    //   title: 'First Hari Item',
    // },
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
    //   title: 'First Hari Item',
    // },
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
    //   title: 'First Hari Item',
    // },
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
    //   title: 'First Hari Item',
    // },
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
    //   title: 'First Hari Item',
    // },
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
    //   title: 'First Hari Item',
    // },
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
    //   title: 'First Hari Item',
    // },
    // {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },
    //   {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },
    //   {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },
    //   {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },

    //   {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   },      {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    //   }, 

    // {
    //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //   title: 'Second Item',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //   title: 'Third Item',
    // },
  ];

const Item = ({ title }) => (
<View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
</View>
);

/**
 * A screen to list all itens passed by params
 * 
 * @param {String} title 
 * @author <haridasafiuza@gmail.com>
 */
function ListScreen ({ navigation }) {

    const renderItem = ({ item }) => (
      <SectionInfo 
        title={item.title} 
        resume={item.bio}
        avatar={LOGO}
        onPress={() => navigateToScreen('Main')}
        />
      );

      const navigateToScreen = ({screen}) => {
        navigation.navigate('Main');    
    
    }

   return ( 
        <View style={styles.safe}>
                              
            <Toolbar title={'Pioneiras'}  onPress={() => navigateToScreen('Main')}/>
            <TouchableOpacity style={{ marginLeft: 2,backgroundColor: 'red', width: 160 }} onPress={navigateToScreen('Main')}>
                        <Icon name="arrow-left" size={25} color="#222" />
                    </TouchableOpacity>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />


        </View>
   );
}

export default ListScreen;