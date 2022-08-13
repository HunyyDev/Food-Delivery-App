import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const CustomHomeMenu = props => {
  const {src} = props;
  const {isChoosing} = props;
  const {label} = props;
  const {navigation} = props;
  console.log('scr: ', src);
  console.log('isChoosing: ', isChoosing);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log(label);
          label === 'House'
            ? navigation.navigate('Home')
            : label === 'Heart'
            ? navigation.navigate('LikedProductScreen')
            : label === 'User'
            ? navigation.navigate('ProfileScreen')
            : navigation.navigate('HistoryScreen');
        }}
        style={styles.button}>
        <Image source={src} style={styles.icon({label})} />
      </Pressable>
    </View>
  );
};

export default CustomHomeMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  icon: ({label}) => ({
    //marginLeft: 20,
    height: label === 'House' ? 30 : label === 'Heart' ? 35 : 40,
    width: label === 'House' ? 30 : 40,
  }),
  button: {
    width: Dimensions.get('window').width / 4,
    height: '100%',
    backgroundColor: 'white',
    //alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
