import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/reponsive';
import {IMG_Vector, IMG_Cart, IMG_Search} from '../../assets/images';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.backgroundContainer}>
        <View style={styles.imageContainer}>
          <Image source={IMG_Vector} />
        </View>

        <View style={styles.cartContainer}>
          <Image source={IMG_Cart} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Delicious \nfood for you'}</Text>
        </View>

        <View style={styles.searchContainer}>
          <Image source={IMG_Search} style={styles.searchImage} />
          <TextInput
            hitSlop={{top: '100%', left: '100%', right: '100%', bottom: '100%'}}
            placeholder={'Search'}
            style={styles.searchInput}
          />
        </View>
        <View style={styles.scrollView1}>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.text1}>{'Foods'}</Text>
            <Text style={styles.text1}>{'Drinks'}</Text>
            <Text style={styles.text1}>{'Snacks'}</Text>
            <Text style={styles.text1}>{'Sauce'}</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageContainer: {
    width: 'auto',
    height: 'auto',
    top: scale(74),
    left: scale(54.6),
    position: 'absolute',
  },
  cartContainer: {
    width: 'auto',
    height: 'auto',
    top: scale(66),
    right: scale(42),
    position: 'absolute',
  },
  title: {
    color: 'black',
    fontFamily: FONT_FAMILY.SFBold,
    fontSize: scale(34),
  },
  titleContainer: {
    width: 'auto',
    height: 'auto',
    top: scale(132),
    left: scale(50),
    position: 'absolute',
  },
  searchContainer: {
    width: scale(430),
    height: scale(60),
    top: scale(242),
    borderRadius: scale(30),
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchImage: {
    left: scale(50),
    alignSelf: 'center',
  },
  searchInput: {
    left: scale(90),
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(17),
    alignSelf: 'center',
    width: scale(300),
    position: 'absolute',
  },
  scrollView1: {
    left: scale(100),
    width: scale(450),
    height: scale(40),
    top: scale(348),
    backgroundColor: 'white',
    position: 'absolute',
    justifyContent: 'center',
  },
  text1: {
    left: scale(50),
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.SFRegular,
    color: CUSTOM_COLOR.Vermilion,
    marginRight: scale(91),
  },

});
