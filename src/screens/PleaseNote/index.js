import {
  BackHandler,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {Image_PaymentBackground} from '../../assets/images';
import scale from '../../assets/constants/reponsive';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';

export class PleaseNoteScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.ImageBackgroundContainer}
          source={Image_PaymentBackground}
        />
        <View style={styles.viewNoteContainer}>
          <Text style={styles.headerTextContainer}>{'Please note'}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  ImageBackgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: CUSTOM_COLOR.Black,
  },
  viewNoteContainer: {
    width: scale(378),
    height: scale(342),
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: CUSTOM_COLOR.White,
    position: 'absolute',
  },
  headerTextContainer: {
    fontFamily: FONT_FAMILY.PoppinsBold,
    left: scale(55),
    top: scale(20),
    color: CUSTOM_COLOR.Black,
    lineHeight: 30,
    fontSize: 20,
  },
});

export default PleaseNoteScreen;
