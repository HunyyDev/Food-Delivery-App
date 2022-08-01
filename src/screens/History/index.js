import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {Icon_Back, IMG_Food, Image_History} from '../../assets/images';
import CUSTOM_COLOR from '../../assets/constants/colors';
import scale from '../../assets/constants/responsive';
import FONT_FAMILY from '../../assets/constants/fonts';

export class HistoryScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.backButton}>
          <Image source={Icon_Back} />
        </TouchableOpacity>
        <Text style={styles.headerContainer}>{'History'}</Text>
        <View style={styles.rectangleContainer}>
          <Image style={styles.food1Image} source={IMG_Food} />
          <Image style={styles.food2Image} source={IMG_Food} />
          <Image style={styles.food3Image} source={IMG_Food} />
          <Text style={styles.textIDContainer}>{'#Or762537'}</Text>
          <Text style={styles.textOrderStatusContainer}>{'Processing'}</Text>
          <Text style={styles.textPriceContainer}>{'$1,900'}</Text>
        </View>
        <Image style={styles.imageHistoryContainer} source={Image_History} />
        <Text style={styles.bigTextContainer}>{'No history yet'}</Text>
        <Text style={styles.smallTextContainer}>
          {'Hit the orange button down\nbelow to Create an order'}
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NoInternetScreen')}
          style={styles.buttonSelection}>
          <Text style={styles.SelectionText}>{'Login'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  backButton: {
    width: scale(24),
    height: scale(24),
    top: scale(61),
    left: scale(41),
    position: 'absolute',
  },
  headerContainer: {
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 18,
    lineHeight: 21.48,
    top: scale(61),
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
  },
  rectangleContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    top: scale(102),
    width: '85%',
    height: scale(132),
    borderRadius: 20,
    position: 'absolute',
    alignSelf: 'center',
  },
  food1Image: {
    top: scale(20),
    left: scale(20),
    height: scale(90),
    width: scale(90),
    borderRadius: 60,
    position: 'absolute',
  },
  food2Image: {
    top: scale(20),
    left: scale(40),
    height: scale(90),
    width: scale(90),
    borderRadius: 60,
    position: 'absolute',
  },
  food3Image: {
    top: scale(20),
    left: scale(60),
    height: scale(90),
    width: scale(90),
    borderRadius: 60,
    position: 'absolute',
  },
  textIDContainer: {
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 16,
    lineHeight: 21.67,
    color: CUSTOM_COLOR.Black,
    left: scale(171),
    top: scale(30),
    position: 'absolute',
  },
  textOrderStatusContainer: {
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 16,
    lineHeight: 21.67,
    top: scale(30),
    left: scale(280),
    position: 'absolute',
    color: CUSTOM_COLOR.UFOGreen,
  },
  textPriceContainer: {
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 16,
    lineHeight: 21.67,
    color: CUSTOM_COLOR.Vermilion,
    left: scale(171),
    top: scale(75),
  },
  imageHistoryContainer: {
    width: scale(136.5),
    height: scale(148.33),
    top: scale(272.92),
    alignSelf: 'center',
  },
  bigTextContainer: {
    top: scale(300),
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 26,
    lineHeight: 35.68,
    alignSelf: 'center',
    color: CUSTOM_COLOR.Black,
  },
  smallTextContainer: {
    top: scale(318),
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 15,
    lineHeight: 21.67,
    alignSelf: 'center',
    color: CUSTOM_COLOR.Black,
    opacity: 0.57,
    textAlign: 'center',
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 17,
    fontFamily: FONT_FAMILY.AbelRengula,
    alignSelf: 'center',
  },
  buttonSelection: {
    width: scale(354),
    height: scale(90),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    marginTop: scale(480),
    alignSelf: 'center',
  },
});

export default HistoryScreen;
