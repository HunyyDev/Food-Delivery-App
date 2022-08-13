import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const CustomButtonTop = props => {
  const {navigation} = props;
  const {src} = props;
  const {destination} = props;
  return (
    <Pressable
      onPress={() => {
        destination === 'Oder'
          ? navigation.navigate('OderScreen')
          : navigation.navigate('Home');
      }}
      style={styles.button}>
      <Image source={src} style={styles.image} />
    </Pressable>
  );
};

export default CustomButtonTop;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 30,
    marginLeft: 340,
    marginTop: -35,
    //backgroundColor: 'red',
  },
  image: {width: 30, height: 25},
});
