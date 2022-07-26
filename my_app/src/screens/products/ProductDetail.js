import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

const ProductDetail = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <Text style={styles.title}>{'hihi'}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
        <Text style={styles.title}>On Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  title: {
    //marginTop: scale(31),
    fontSize: 30,
    fontFamily: FONT_FAMILY.SFProRounded_Heavy,
    color: CUSTOM_COLOR.Black,
    marginLeft: scale(50),
  },
});
