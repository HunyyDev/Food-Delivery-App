/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {ICOnBack, ICSearch} from '../../assets/icons';
import SCREEN_NAME from '../../constants/screen';
import {IMG_Disconnect} from '../../assets/images';

const Disconnect = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };

  const [onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxContainer}>
        <IMG_Disconnect />
        <Text style={styles.titleNoInternet}>{'No internet Connection'}</Text>
        <Text style={styles.text}>
          {
            '  Your internet connection is currently not available please check or try again.'
          }
        </Text>
      </View>

      <>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.titleButtonSecondary}>{'Try again'}</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
};

export default Disconnect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },

  boxContainer: {
    marginTop: scale(200),
    marginLeft: scale(40),
    marginRight: scale(40),

    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  titleNoInternet: {
    marginTop: scale(26),
    fontSize: 28,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.Black,
  },

  text: {
    marginTop: scale(14),
    fontSize: 17,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
  },

  buttonSecondary: {
    marginTop: scale(51),
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
    backgroundColor: CUSTOM_COLOR.Vermilion,
  },

  titleButtonSecondary: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.White,
  },
});
