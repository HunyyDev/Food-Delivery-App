import {
  BackHandler,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
          <View style={styles.smallViewNoteContainer}>
            <Text style={styles.headerTextContainer}>{'Please note'}</Text>
          </View>
          <Text style={styles.text1Container}>{'Delivery to Mainland'}</Text>
          <Text style={styles.text2Container}>{'N1000 - N2000'}</Text>
          <Text style={styles.text3Container}>{'Delivery to island'}</Text>
          <Text style={styles.text4Container}>{'N2000 - N3000'}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('WaitingForUpgrade')}
            style={styles.buttonSelection}>
            <Text style={styles.SelectionText}>{'Cancel'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('WaitingForUpgrade')}
            style={styles.button2Selection}>
            <Text style={styles.SelectionText2}>{'Proceed'}</Text>
          </TouchableOpacity>
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
    height: scale(372),
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
  smallViewNoteContainer: {
    flex: 0.25,
    backgroundColor: CUSTOM_COLOR.BrightGray,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text1Container: {
    fontFamily: FONT_FAMILY.PoppinMedium,
    fontSize: 15,
    lineHeight: 22.5,
    left: scale(55),
    top: scale(100),
    fontStyle: 'normal',
    textTransform: 'uppercase',
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
    borderBottomWidth: 0.5,
    borderColor: CUSTOM_COLOR.Black,
    width: scale(260),
    borderStartWidth: 120,
  },
  text2Container: {
    fontFamily: FONT_FAMILY.PoppinsBold,
    fontSize: 17,
    lineHeight: 25.5,
    left: scale(55),
    top: scale(130),
    position: 'absolute',
    color: CUSTOM_COLOR.Black,
  },
  text3Container: {
    fontFamily: FONT_FAMILY.PoppinMedium,
    fontSize: 15,
    lineHeight: 22.5,
    left: scale(55),
    top: scale(210),
    fontStyle: 'normal',
    textTransform: 'uppercase',
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
  },
  text4Container: {
    fontFamily: FONT_FAMILY.PoppinsBold,
    fontSize: 17,
    lineHeight: 25.5,
    left: scale(55),
    top: scale(240),
    position: 'absolute',
    color: CUSTOM_COLOR.Black,
  },
  SelectionText: {
    color: CUSTOM_COLOR.Black,
    fontSize: 17,
    fontFamily: FONT_FAMILY.PoppinsBold,
    alignSelf: 'center',
  },
  buttonSelection: {
    height: scale(46),
    borderRadius: 30,
    //backgroundColor: CUSTOM_COLOR.Vermilion,
    // justifyContent: 'center',
    top: scale(300),
    left: scale(55),
    opacity: 0.5,

    position: 'absolute',
  },
  SelectionText2: {
    color: CUSTOM_COLOR.White,
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFBlack,
    alignSelf: 'center',
  },
  button2Selection: {
    width: scale(200),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    marginTop: scale(50),
    alignSelf: 'center',
    top: scale(230),
    left: scale(155),

    position: 'absolute',
  },
});

export default PleaseNoteScreen;
