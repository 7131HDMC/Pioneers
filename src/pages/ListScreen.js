import React from 'react';

import {
    Image,
    SafeAreaView,
    View,
    Text,
    FlatList
} from 'react-native';

import {styles} from './styles/ListScreenStyle';

import Toolbar from '~/components/toolbar';

import SectionInfo  from "~/components/sectionInfo";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      bio: '-aed5--aed5--aed5--aed5--aed5--aedaaaaaas56565ffssd5--aed5aed5aed5...-',
      title: 'First Hari Item',
    },
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
const ListScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <SectionInfo 
          title={item.title} 
          resume={item.bio}
          avatar='OI'
          />
      );

   return ( 
        <SafeAreaView style={styles.safe}>

            <Toolbar title={'Pioneiras'}/>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />


        </SafeAreaView>
   );
}

export default ListScreen;