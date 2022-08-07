import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import BackButton from './BackButton';

import COLORS from '../constants/colors';

const Header = props => {
  const {navigation, style} = props;

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>Cart</Text>
      <BackButton style={styles.backButton} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    position: 'absolute',
  },
  text: {
    color: COLORS.Black,
    fontSize: 18,
    flexGrow: 1,
    textAlign: 'center',
  },
});

export default Header;
