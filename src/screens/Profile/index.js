import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CUSTOM_COLOR from '../../assets/constants/colors';
import scale from '../../assets/constants/reponsive';
import {Icon_Back, Icon_Go, IMG_Personal} from '../../assets/images';
import FONT_FAMILY from '../../assets/constants/fonts';
export class MyProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.backButton}>
          <Image source={Icon_Back} />
        </TouchableOpacity>
        <Text style={styles.titleContainer}>{'My profile'}</Text>
        <Text style={styles.text1Container}>{'Personal details'}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('MyProfileScreen')}
          style={styles.buttonContainer}>
          <Text style={styles.text2Container}>{'change'}</Text>
        </TouchableOpacity>
        <View style={styles.rectanglContainer}>
          <Image style={styles.imageContainer} source={IMG_Personal} />
          <Text style={styles.text3Container}>{'Marvis Ighedosa'}</Text>
          <Text style={styles.text4Container}>{'Dosamarvis@gmail.com'}</Text>
          <Text style={styles.text5Container}>{'+234 9011039271'}</Text>
          <Text style={styles.text6Container}>
            {'No 15 uti street off ovie palace\nroad effurun delta state'}
          </Text>
        </View>
        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate('MyProfileScreen')}
          style={styles.button2Container}>
          <Text style={styles.text7Container}>{'Oders'}</Text>
          <Image style={styles.iconContainer} source={Icon_Go} />
        </TouchableOpacity> */}
        <View style={styles.fourButtonView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MyProfileScreen')}
            style={styles.button2Container}>
            <Text style={styles.text7Container}>{'Oders'}</Text>
            <Image style={styles.iconContainer} source={Icon_Go} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MyProfileScreen')}
            style={styles.button2Container}>
            <Text style={styles.text7Container}>{'Pending reviews'}</Text>
            <Image style={styles.iconContainer} source={Icon_Go} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MyProfileScreen')}
            style={styles.button2Container}>
            <Text style={styles.text7Container}>{'Faq'}</Text>
            <Image style={styles.iconContainer} source={Icon_Go} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MyProfileScreen')}
            style={styles.button2Container}>
            <Text style={styles.text7Container}>{'Help'}</Text>
            <Image style={styles.iconContainer} source={Icon_Go} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('MyProfileScreen')}
          style={styles.buttonSelection}>
          <Text style={styles.SelectionText}>{'Update'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: scale(24),
    height: scale(24),
    top: scale(20),
    left: scale(41),
    position: 'absolute',
  },
  titleContainer: {
    top: scale(70),
    left: scale(50),
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 30,
    lineHeight: 43.33,
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
  },
  text1Container: {
    top: scale(139),
    left: scale(42),
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 14,
    lineHeight: 22.94,
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
  },
  buttonContainer: {
    top: scale(-305),
    left: scale(124),
  },
  text2Container: {
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 11,
    lineHeight: 19.12,
    color: CUSTOM_COLOR.Vermilion,
    position: 'absolute',
  },
  rectanglContainer: {
    width: scale(378),
    height: scale(207),
    top: scale(180),
    left: scale(42),
    position: 'absolute',
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
  },
  imageContainer: {
    width: scale(91),
    height: scale(100),
    left: scale(20),
    top: scale(20),
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'red',
  },
  text3Container: {
    top: scale(25),
    left: scale(130),
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 14,
    lineHeight: 22.94,
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
  },
  text4Container: {
    top: scale(50),
    left: scale(130),
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 12,
    lineHeight: 19,
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
    borderBottomWidth: 0.5,
    borderColor: CUSTOM_COLOR.Black,
    width: scale(200),
  },
  text5Container: {
    top: scale(58),
    left: scale(130),
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 12,
    lineHeight: 19,
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
    borderBottomWidth: 0.5,
    borderColor: CUSTOM_COLOR.Black,
    width: scale(200),
  },
  text6Container: {
    top: scale(63),
    left: scale(130),
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 12,
    lineHeight: 19,
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
  },
  button2Container: {
    width: scale(378),
    height: scale(70),
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
    marginTop: 15,
  },
  text7Container: {
    fontFamily: FONT_FAMILY.AbelRengula,
    fontSize: 17,
    lineHeight: 22.94,
    top: scale(25),
    left: scale(30),
    position: 'absolute',
    color: CUSTOM_COLOR.Black,
  },
  iconContainer: {
    top: scale(23),
    left: scale(330),
    width: scale(24),
    height: scale(24),
    position: 'absolute',
  },
  fourButtonView: {
    width: scale(378),
    height: scale(400),
    top: scale(390),
    left: scale(42),
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 15,
    fontFamily: FONT_FAMILY.AbelRengula,
    alignSelf: 'center',
  },
  buttonSelection: {
    width: scale(378),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    left: scale(42),
    top: scale(810),
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default MyProfileScreen;
