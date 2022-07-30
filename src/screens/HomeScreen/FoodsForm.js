import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {IMG_Food, IMG_Food2, IMG_Food3} from '../../assets/images';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/reponsive';

export class Foods extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.scrollView}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.listContainer}>
              <Image style={styles.foodImage} source={IMG_Food2} />
              <Text style={styles.textFoodContainer}>
                {'Veggie \ntomato mix'}
              </Text>
              <Text style={styles.textPriceContainer}>{'$1,900'}</Text>
            </View>
            <View style={styles.listContainer}>
              <Image style={styles.foodImage} source={IMG_Food} />
              <Text style={styles.textFoodContainer}>
                {'Veggie \ntomato mix'}
              </Text>
              <Text style={styles.textPriceContainer}>{'$1,900'}</Text>
            </View>
            <View style={styles.listContainer}>
              <Image style={styles.foodImage} source={IMG_Food3} />
              <Text style={styles.textFoodContainer}>
                {'Spicy \nfish sauce'}
              </Text>
              <Text style={styles.textPriceContainer}>{'$2,300'}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  scrollView: {
    marginTop: scale(430),
    backgroundColor: CUSTOM_COLOR.Concrete,
    height: scale(370),
  },
  contentContainer: {
    paddingVertical: 20,
    width: scale(650),
    height: scale(500),
    justifyContent: 'center',
  },
  textFoodContainer: {
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 22,
    top: scale(115),
  },
  listContainer: {
    backgroundColor: 'white',
    width: scale(200),
    height: scale(270),
    marginTop: scale(60.49),
    marginRight: scale(20),
    borderRadius: scale(40),
    resizeMode: 'stretch',
  },
  foodImage: {
    width: scale(150),
    height: scale(150),
    left: scale(25),
    top: scale(-60),
    borderRadius: scale(800),
    position: 'absolute',
  },
  textPriceContainer: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 15,
    textAlign: 'center',
    top: scale(130),
    lineHeight: 20,
  },
});
