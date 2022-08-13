import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonGoBack from '../../Components/ButtonGoBack';
import CUSTOM_COLOR from '../../constant/color';
import {SafeAreaView} from 'react-native-safe-area-context';

const LikedProductScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Liked Product</Text>
      <ButtonGoBack navigation={navigation} />
      <Text style={styles.dis}>Nothing</Text>
    </SafeAreaView>
  );
};

export default LikedProductScreen;

const styles = StyleSheet.create({
  title: {
    color: CUSTOM_COLOR.Black,
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  dis: {
    alignSelf: 'center',
    fontSize: 60,
    marginTop: 220,
    opacity: 0.3,
  },
});
