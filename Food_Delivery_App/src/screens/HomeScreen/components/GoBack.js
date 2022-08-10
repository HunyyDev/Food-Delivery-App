import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import scale from '../../../components/scale';
import {IC_GoBack} from '../../../assets/icons';

const GoBack = ({navigation}) => {
  return (
    <View style={styles.goBackContainer}>
      <TouchableOpacity
        hitSlop={styles.hitSlop}
        onPress={() => {
          navigation.goBack();
        }}>
        <IC_GoBack />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  goBackContainer: {
    position: 'absolute',
    top: scale(61),
    left: scale(50),
  },
  hitSlop: {
    top: scale(10),
    left: scale(10),
    right: scale(10),
    bottom: scale(10),
  },
});
