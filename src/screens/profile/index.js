import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from './src/assets/constants/colors';
import FONT_FAMILY from './src/assets/constants/fonts';
import scale from './src/assets/constants/reponsive';
import {
  IMG_Line,
  IMG_Profile,
  IMG_Vector2,
  IMG_Vector3,
} from './src/assets/images';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image source={IMG_Vector2} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'My profile'}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{'Personal details'}</Text>
        </View>
        <TouchableOpacity style={styles.changeContainer}>
          <Text style={styles.changeButton}>{'change'}</Text>
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image source={IMG_Profile} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{'Marvis Ighedosa'}</Text>
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.information}>{'Dosamarvis@gmail.com'}</Text>
            <Image source={IMG_Line} />
            <Text style={styles.information}>{'+234 9011039271'}</Text>
            <Image source={IMG_Line} />
            <Text style={styles.information}>
              {'No 15 uti street off ovie palace \nroad effurun delta state'}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.ordersContainer}>
          <Text style={styles.button}>{'Orders'}</Text>
          <Image style={styles.vector} source={IMG_Vector3} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.reviewsContainer}>
          <Text style={styles.button}>{'Pending reviews'}</Text>
          <Image style={styles.vector} source={IMG_Vector3} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqContainer}>
          <Text style={styles.button}>{'Faq'}</Text>
          <Image style={styles.vector} source={IMG_Vector3} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpContainer}>
          <Text style={styles.button}>{'Help'}</Text>
          <Image style={styles.vector} source={IMG_Vector3} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.updateContainer}>
          <Text style={styles.updateButton}>{'Update'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    top: scale(66),
    left: scale(50),
  },
  title: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: 34,
    color: CUSTOM_COLOR.Black,
  },
  titleContainer: {
    top: scale(124),
    left: scale(50),
    position: 'absolute',
  },
  textContainer: {
    top: scale(209),
    left: scale(42),
    position: 'absolute',
  },
  text: {
    color: CUSTOM_COLOR.Black,
    fontSize: 18,
  },
  changeContainer: {
    top: scale(212),
    left: scale(400),
    position: 'absolute',
  },
  changeButton: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: 15,
  },
  ordersContainer: {
    top: scale(460),
    left: scale(70),
    width: scale(390),
    height: scale(50),
    position: 'absolute',
    justifyContent: 'center',
  },
  reviewsContainer: {
    top: scale(530),
    left: scale(70),
    width: scale(390),
    height: scale(50),
    position: 'absolute',
    justifyContent: 'center',
  },
  faqContainer: {
    top: scale(600),
    left: scale(70),
    width: scale(390),
    height: scale(50),
    position: 'absolute',
    justifyContent: 'center',
  },
  helpContainer: {
    top: scale(670),
    left: scale(70),
    width: scale(390),
    height: scale(50),
    position: 'absolute',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    alignSelf: 'flex-start',
    position: 'absolute',
    marginLeft: 30,
  },
  vector: {
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  updateContainer: {
    top: scale(750),
    marginLeft: 70,
    height: scale(70),
    width: scale(350),
    position: 'absolute',
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
  },
  updateButton: {
    color: CUSTOM_COLOR.athensGray,
    fontSize: 20,
  },
  profileContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    marginLeft: 42,
    marginRight: 50,
    top: scale(241),
    height: scale(200),
  },
  imageContainer: {
    top: scale(18),
    left: scale(16),
    position: 'absolute',
    backgroundColor: CUSTOM_COLOR.White,
  },
  name: {
    fontSize: 23,
    color: CUSTOM_COLOR.Black,
  },
  nameContainer: {
    top: scale(26),
    left: scale(150),
  },
  informationContainer: {
    top: scale(20),
    left: scale(150),
  },
  information: {
    fontSize: 16,
  },
});

export default App;
