import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    height: '100%',
    flexDirection: "column",
    alignItems: 'center',
    alignContent: "space-around",
    borderRadius: 6,
    padding: 5
  },
    header:{
      flex: 2,
      flexDirection: "column",
      alignItems: 'center',
      marginTop: 35,
      marginEnd: 25,
      marginStart: 25

    },
    avatar: {
      flex: 1,
      alignItems: 'center',
      maxWidth: 50,
      marginLeft: 4,
      padding: 10,
      borderRadius: 24
    },
    circle: {
        width: 45,
        height: 45,
        resizeMode: 'stretch',
        borderRadius: 155
      },
    text: {
        marginLeft: 10
    },
    title: {
        fontSize: 26,

        borderRadius: 15,
        

    },
    subtitle: {
        width: 270,
        backgroundColor: 'red',
        color: '#33333399',
        fontSize: 12
    },
    body: {
      flex: 5,
      borderRadius: 15,
      backgroundColor: 'red',

      alignItems: 'center',
      marginEnd: 15,
      marginStart: 15,

    }
});
  