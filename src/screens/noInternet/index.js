import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CUSTOM_COLOR from '../../assets/constants/colors';
import {IMG_NoInternet} from '../../assets/images';
import scale from '../../assets/constants/responsive';
import FONT_FAMILY from '../../assets/constants/fonts';
export class NoInternetScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.imageContainer} source={IMG_NoInternet} />
        <Text style={styles.textContainer}>{'No internet Connection'}</Text>
        <Text style={styles.smallTextContainer}>
          {
            'Your internet connection is currently\nnot available please check or try again.'
          }
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NoInternetScreen')}
          style={styles.buttonSelection}>
          <Text style={styles.SelectionText}>{'Try again'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: scale(180),
    height: scale(180),
    top: scale(251),
    left: scale(138),
    position: 'absolute',
  },
  textContainer: {
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 24,
    lineHeight: 35.68,
    textAlign: 'center',
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
  },
  smallTextContainer: {
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 15,
    top: scale(488),
    lineHeight: 17,
    textAlign: 'center',
    opacity: 0.57,
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
  },
  buttonSelection: {
    width: scale(314),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    marginTop: scale(340),
    alignSelf: 'center',
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 15,
    fontFamily: FONT_FAMILY.AbelRengula,
    alignSelf: 'center',
  },
});

export default NoInternetScreen;
