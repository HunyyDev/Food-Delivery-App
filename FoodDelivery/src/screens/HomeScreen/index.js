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
import {
  IMG_Vector,
  IMG_Cart,
  IMG_Search,
  IMG_Food,
  IMG_Food3,
  IMG_Food2,
  IMG_Home,
  IMG_Heart,
  IMG_User,
  IMG_Clock,
} from '../../assets/images';

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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.text1}>{'Foods'}</Text>
            <Text style={styles.text1}>{'Drinks'}</Text>
            <Text style={styles.text1}>{'Snacks'}</Text>
            <Text style={styles.text1}>{'Sauce'}</Text>
          </ScrollView>
        </View>
        <View style={styles.scrollView2}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContiner}>
            <View style={styles.listContainer}>
              <Image style={styles.foodImage} source={IMG_Food2} />
              <Text style={styles.textFoodContainer}>
                {'Veggie \ntomato mix'}
              </Text>
              <Text style={styles.textPriceContainer}>{'N1,900'}</Text>
            </View>
            <View style={styles.listContainer}>
              <Image style={styles.foodImage} source={IMG_Food} />
              <Text style={styles.textFoodContainer}>
                {'Veggie \ntomato mix'}
              </Text>
              <Text style={styles.textPriceContainer}>{'N1,900'}</Text>
            </View>
            <View style={styles.listContainer}>
              <Image style={styles.foodImage} source={IMG_Food3} />
              <Text style={styles.textFoodContainer}>
                {'Spicy \nfish sauce'}
              </Text>
              <Text style={styles.textPriceContainer}>{'N2,300'}</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.viewTabbar}>
          <Image style={styles.icon1Container} source={IMG_Home} />
          <Image style={styles.icon2Container} source={IMG_Heart} />
          <Image style={styles.icon3Container} source={IMG_User} />
          <Image style={styles.icon4Container} source={IMG_Clock} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.Silver,
    flex: 1,
    alignItems: 'center',
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
    backgroundColor: CUSTOM_COLOR.Silver,
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
  scrollView2: {
    marginTop: scale(450),
    backgroundColor: 'white',
    backgroundColor: CUSTOM_COLOR.Silver,
    height: scale(370),
  },
  listContainer: {
    backgroundColor: 'white',
    width: scale(200),
    height: scale(270),
    marginTop: scale(60.49),
    marginRight: scale(20),
    borderRadius: scale(40),
    resizeMode: 'strech',
  },
  foodImage: {
    width: scale(150),
    height: scale(150),
    left: scale(25),
    top: scale(-60),
    borderRadius: scale(800),
    position: 'absolute',
  },
  contentContiner: {
    paddingVertical: 20,
    width: scale(650),
    height: scale(500),
    justifyContent: 'center',
  },
  textFoodContainer: {
    fontFamily: FONT_FAMILY.SFProTextBold,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 22,
    top: scale(115),
  },
  textPriceContainer: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.SFProTextBold,
    fontSize: 15,
    textAlign: 'center',
    top: scale(130),
    lineHeight: 20,
  },
  viewTabbar:{
   // width: scale(25),
    height: scale(25),
    bottom: scale(50.1),
  
    position: 'absolute',
  },
  icon1Container:{
    position: 'absolute',
    left: scale(-200),
    bottom: scale(0),

    
  },
  icon2Container: {
    position: 'absolute',
    left: scale(-80.57),
    bottom: scale(0),

  },
  icon3Container:{
    position: 'absolute',
    left: scale(40),
    bottom: scale(0),
  },
  icon4Container:{
    position: 'absolute',
    left: scale(150),
    bottom: scale(-6),
    opacity: 0.5,
  }
});
