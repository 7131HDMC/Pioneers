import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    area: {
        flexGrow: 1,
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 2,
        height: 75,
        maxHeight: 77,
        padding: 6
    },
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      borderWidth: 3,
      borderColor: '#33333320',
      borderRadius: 6,
      padding: 5
    },
    avatar: {
      flex: 5,
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
        fontSize: 16,
        maxWidth: 140
    },
    subtitle: {
        width: 270,
        backgroundColor: 'red',
        color: '#33333399',
        fontSize: 12
    }
});
  