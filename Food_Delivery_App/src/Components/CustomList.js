import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import React from 'react';
import FONT_FAMILY from '../constant/font';
import CUSTOM_COLOR from '../constant/color';

const CustomList = props => {
  const {src} = props;
  const {name} = props;
  const {cost} = props;
  const {navigation} = props;
  console.log('Name: ', name);
  console.log('Cost: ', cost);
  const showAlert = name =>
    Alert.alert(name, 'Done', [
      {
        text: 'Cancel',
        onPress: () => {},
        //style: 'cancel',
      },
    ]);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        console.log('Oder Done');
        //showAlert(name);
        navigation.navigate('ProductDetailScreen', {
          src: src,
          name: name,
          cost: cost,
        });
      }}>
      <Image source={src} style={styles.ImageS} />
      <Text style={styles.naemS}>{name}</Text>
      <Text style={styles.costS}>{cost}</Text>
    </Pressable>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.5,
    backgroundColor: CUSTOM_COLOR.White,
    marginLeft: 20,
    borderRadius: 20,
  },
  naemS: {
    fontFamily: FONT_FAMILY.Bold_Sf,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: -45,
    color: CUSTOM_COLOR.Black,
  },
  costS: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontSize: 17,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.Bold_Sf,
    marginTop: 30,
  },
  ImageS: {
    width: 120,
    height: 120,
    top: -50,
    alignSelf: 'center',
    borderRadius: 100,
  },
});
