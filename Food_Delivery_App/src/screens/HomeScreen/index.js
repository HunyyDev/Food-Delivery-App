import FONT_FAMILY from '../../constants/font';
import CUSTOM_COLORS from '../../constants/colors';
import scale from '../../constants/responsive';
import {
  IMG_LOGO,
  IMG_SpicyFishSauce,
  IMG_VeggieTomatoMix,
} from '../../assets/images';
import {
  TextInput,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {
  ICHeart,
  ICCart,
  ICMenu,
  ICHome,
  ICSearch,
  ICTime,
  ICUser,
} from '../../assets/icons';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.HeadWrapper}>
            <TouchableOpacity>
              <ICMenu style={styles.TopLeftContainer} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ICCart style={styles.TopRightContainer} />
            </TouchableOpacity>
            {/* 
            <ICMenu style={styles.icon} />
            <ICCart style={styles.icon} /> */}
          </View>
        </SafeAreaView>

        <View>
          <Text style={styles.TextStyle}>Delicious </Text>
          <Text style={styles.TextStyle}>food for you</Text>
          <View style={styles.Searchbar}>
            <View style={styles.inputContainer}>
              <ICSearch />
              <TextInput style={styles.TextInSearchBar} placeholder="Search" />
            </View>
          </View>
        </View>

        {/* <View style={styles.HeadWrapper}>
          <TouchableOpacity>
            <Text style={styles.TextMenu}> Foods </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextMenu}> Drinks </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextMenu}> Snacks </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextMenu}> Sauces </Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.ScrollViewTop}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Text style={styles.TextInScrollView}>Foods</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.TextInScrollView}>Drinks</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.TextInScrollView}>Snacks</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.TextInScrollView}>Sauces</Text>
            </TouchableOpacity>
            {/* <Text style={styles.TextInScrollView}>Drinks</Text>
            <Text style={styles.TextInScrollView}>Snacks</Text>
            <Text style={styles.TextInScrollView}>Sauces</Text> */}
          </ScrollView>
        </View>

        <View style={styles.FoodScrollView}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.ContentContainer}>
            <View style={styles.listContainer}>
              <Image style={styles.foodImage} source={IMG_VeggieTomatoMix} />
              <Text style={styles.textFoodContainer}>
                {'Veggie \ntomato mix'}
              </Text>
              <Text style={styles.textPriceContainer}>{'N1,900'}</Text>
            </View>
            <View style={styles.listContainer}>
              <Image style={styles.foodImage} source={IMG_VeggieTomatoMix} />
              <Text style={styles.textFoodContainer}>
                {'Veggie \ntomato mix'}
              </Text>
              <Text style={styles.textPriceContainer}>{'N1,900'}</Text>
            </View>
            <View style={styles.listContainer}>
              <Image style={styles.foodImage} source={IMG_SpicyFishSauce} />
              <Text style={styles.textFoodContainer}>
                {'Spicy \nfish sauce'}
              </Text>
              <Text style={styles.textPriceContainer}>{'N2,300'}</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.BottomTabbar}>
          <ICHome style={styles.HomeIcon} />
          <ICHeart style={styles.HeartIcon} />
          <ICUser style={styles.UserIcon} />
          <ICTime style={styles.TimeIcon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.Concrete,
  },
  TopLeftContainer: {
    width: 'auto',
    height: 'auto',
    top: scale(5),
    left: scale(30),
    position: 'absolute',
  },
  TopRightContainer: {
    width: 'auto',
    height: 'auto',
    top: scale(5),
    right: scale(30),
    position: 'absolute',
  },

  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 40,
    // left: scale(30),
    // right: scale(30),
    paddingVertical: scale(40),
  },
  icon: {
    width: 'auto',
    height: 'auto',
    position: 'absolute',
  },
  TextStyle: {
    fontSize: 34,
    left: scale(50),
    // left: scale(30),
    fontWeight: 'bold',
    fontStyle: FONT_FAMILY.SFBlack,
    fontColor: CUSTOM_COLORS.Black,
  },
  TextMenu: {
    fontSize: 20,
  },
  Searchbar: {
    flexDirection: 'row',
    marginTop: scale(30),
    marginHorizontal: scale(40),
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    height: scale(50),
    borderRadius: 100,
    flexDirection: 'row',
    backgroundColor: CUSTOM_COLORS.Gallery,
    alignItems: 'center',
    paddingLeft: scale(20),
  },
  TextInSearchBar: {
    flex: 1,
    fontSize: 20,
    // paddingLeft: 40,
    left: scale(40),
  },
  ScrollViewTop: {
    left: scale(20),
    width: scale(450),
    height: scale(40),
    top: scale(300),
    backgroundColor: CUSTOM_COLORS.Concrete,
    position: 'absolute',
    justifyContent: 'center',
  },
  TextInScrollView: {
    left: scale(20),
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.SFRegular,
    color: CUSTOM_COLORS.Manatee,
    marginRight: scale(91),
  },

  FoodScrollView: {
    marginTop: scale(90),
    backgroundColor: CUSTOM_COLORS.Concrete,
    height: scale(800),
  },
  listContainer: {
    backgroundColor: 'white',
    width: scale(240),
    height: scale(320),
    marginTop: scale(70),
    marginRight: scale(40),
    borderRadius: scale(40),
    // resizeMode: 'Stretch',
  },
  foodImage: {
    width: scale(150),
    height: scale(150),
    left: scale(40),
    top: scale(-50),
    borderRadius: scale(800),
    position: 'absolute',
  },
  ContentContainer: {
    paddingVertical: 20,
    width: scale(650),
    height: scale(600),
    justifyContent: 'center',
  },
  textFoodContainer: {
    fontFamily: FONT_FAMILY.SFBold,
    fontSize: 22,
    fontWeight: 'bold',
    color: CUSTOM_COLORS.Black,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 22,
    top: scale(160),
  },
  textPriceContainer: {
    color: CUSTOM_COLORS.Vermilion,
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: 17,
    textAlign: 'center',
    top: scale(200),
    lineHeight: 20,
    fontWeight: 'bold',
  },
  BottomTabbar: {
    // width: scale(25),
    height: scale(25),
    bottom: scale(40),
    marginLeft: scale(240),
    position: 'absolute',
  },
  HomeIcon: {
    position: 'absolute',
    left: scale(-200),
  },
  HeartIcon: {
    position: 'absolute',
    left: scale(-80.57),
  },
  UserIcon: {
    position: 'absolute',
    left: scale(40),
  },
  TimeIcon: {
    position: 'absolute',
    left: scale(150),
    opacity: 0.5,
  },
});
