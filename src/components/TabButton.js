import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import scale from '../constants/responsive';
import font_family from '../constants/fonts';
import COLOR from '../constants/colors';
import {navigate} from '../routes/RootNavigator';

const TabButton = ({currentTab, image, setCurrentTab, title, line = true}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setCurrentTab(title);
        navigate(title);
      }}
      activeOpacity={0.8}>
      <View style={styles(currentTab).container}>
        <View style={styles().buttonContainer}>
          <Image style={styles().image} source={image}></Image>
          <Text style={styles().text}>{title}</Text>
        </View>

        {line === true ? <View style={styles().line}></View> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = props =>
  StyleSheet.create({
    container: {
      width: scale.scaleWidth(233.03),
      height: scale.scaleHeight(60),
      // backgroundColor: 'black',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingLeft: scale.scaleWidth(28),
      marginTop: scale.scaleWidth(26),
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    text: {
      fontFamily: font_family.Poppins.semibold,
      fontSize: scale.scaleWidth(17),
      color: COLOR.white,
      paddingHorizontal: scale.scaleWidth(12),
    },
    line: {
      width: scale.scaleWidth(132),
      height: 1,
      backgroundColor: COLOR.athensGray,
      position: 'absolute',
      bottom: 0,
      opacity: 0.6,
      right: scale.scaleWidth(40),
    },
    image: {
      tintColor: COLOR.white,
    },
  });

export default TabButton;
