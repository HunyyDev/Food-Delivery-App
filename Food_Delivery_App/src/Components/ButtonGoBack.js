import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ICO_Chevron_Left} from '../assets/icons';

const ButtonGoBack = props => {
  const {navigation} = props;

  return (
    <Pressable style={styles.button} onPress={() => navigation.goBack()}>
      <Image source={ICO_Chevron_Left} style={styles.image} />
    </Pressable>
  );
};

export default ButtonGoBack;

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').height * 0.08,
    //backgroundColor: 'red',
    marginLeft: 20,
    marginTop: 10,
    justifyContent: 'center',
    position: 'absolute',
  },
  image: {
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').height * 0.04,
  },
});
