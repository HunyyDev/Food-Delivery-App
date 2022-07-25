import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
  } from 'react-native';
  import React, {Component} from 'react';
  import FONT_FAMILY from '../../constants/fonts';
  import CUSTOM_COLOR from '../../constants/color';
  import {IMG_BACKGROUND, IMG_LOGO} from '../../assets/images';
  import scale from '../../../responsive';
  import Custom_ButtonOne from '../../components/Custom_ButtonOne';

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
       <>
       <View style={styles.Img}></View>
       <Text> Veggie tomato mix </Text>
       </> 
      </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Silver,
    },
    Img: {
        height: scale(499),
        width: Dimensions.get('window').width,
    },
})