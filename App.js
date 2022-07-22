import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FONT_FAMILY from './src/constants/fonts';
import CUSTOM_COLOR from './src/constants/colors';
import {
  IC_Vector,
  IC_ShoppingCart,
  IC_Search,
  IC_House,
  IC_Heart,
  IC_User,
  IC_Refresh,
} from './src/assets/icons';
import {IMG_FoodImage} from './src/assets/images';
const App = () => {
  return (
    // Background
    <ScrollView style={styles.backgroundContainer}>
      <View style={styles.navigatorContainer}>
        {/* Bar */}
        <Image source={IC_Vector} resizeMode={'contain'} />
        {/* ShoppingCart */}
        <Image source={IC_ShoppingCart} resizeMode={'contain'} />
      </View>
      {/* FoodText */}
      <View style={styles.foodTextContainer}>
        <Text style={styles.foodText}>Delicious food for you</Text>
      </View>
      {/* Rectangle */}
      <View style={styles.rectangleContainer}>
        <Image
          source={IC_Search}
          style={styles.searchIcon}
          resizeMode={'contain'}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={CUSTOM_COLOR.Black}
          style={styles.inputSearchText}
        />
      </View>
      {/* ScrollView */}
      <ScrollView horizontal style={styles.ScrollViewStyle}>
        <View style={styles.scrollViewBox}>
          <View style={styles.foodImageContainer}>
            <Image
              source={IMG_FoodImage}
              style={styles.foodImageStyle}
              resizeMode={'contain'}
            />
          </View>
          <Text style={styles.foodName}>Veggie tomato mix</Text>
          <Text style={styles.foodPrice}>N1,900</Text>
        </View>
        <View style={styles.scrollViewBox}>
          <View style={styles.foodImageContainer}>
            <Image
              source={IMG_FoodImage}
              style={styles.foodImageStyle}
              resizeMode={'cover'}
            />
          </View>
          <Text style={styles.foodName}>Veggie tomato mix</Text>
          <Text style={styles.foodPrice}>N1,900</Text>
        </View>
        <View style={styles.scrollViewBox}>
          <View style={styles.foodImageContainer}>
            <Image
              source={IMG_FoodImage}
              style={styles.foodImageStyle}
              resizeMode={'cover'}
            />
          </View>
          <Text style={styles.foodName}>Veggie tomato mix</Text>
          <Text style={styles.foodPrice}>N1,900</Text>
        </View>
      </ScrollView>
      <View style={styles.iconSection}>
        <TouchableOpacity>
          <Image source={IC_House} resizeMode={'cover'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={IC_Heart} resizeMode={'cover'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={IC_User} resizeMode={'cover'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={IC_Refresh} opacity={0.3} resizeMode={'cover'} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  foodTextContainer: {
    width: 190,
    height: 90,
    marginLeft: 50,
    marginTop: 43,
  },
  foodText: {
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 40.57,
    color: CUSTOM_COLOR.Black,
  },
  navigatorContainer: {
    marginTop: 74,
    marginLeft: 54,
    marginRight: 42,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rectangleContainer: {
    borderRadius: 30,
    marginTop: 28,
    marginHorizontal: 50,
    height: 60,
    backgroundColor: CUSTOM_COLOR.Gallery,
    borderColor: CUSTOM_COLOR.Gallery,
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIcon: {
    width: 18,
    height: 18,
    borderCenterWidth: 2,
    borderColor: CUSTOM_COLOR.Black,
    borderStyle: 'solid',
  },
  inputSearchText: {
    width: 200,
    marginLeft: 16,
    paddingTop: 20,
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'normal',
    fontSize: 17,
    color: CUSTOM_COLOR.Black,
    lineHeight: 15,
    opacity: 0.5,
  },
  ScrollViewStyle: {
    marginTop: 110,
    height: 320,
  },
  scrollViewBox: {
    alignSelf: 'flex-end',
    width: 220,
    height: 270,
    backgroundColor: CUSTOM_COLOR.white,
    borderRadius: 30,
    shadowColor: CUSTOM_COLOR.MineShaft,
    shadowOffset: {width: 0, height: 30},
    shadowRadius: 60,
    shadowOpacity: 0.1,
    marginHorizontal: 25,
    justifyContent: 'center',
  },
  foodImageContainer: {
    position: 'absolute',
    top: -50,
  },
  foodImageStyle: {
    position: 'absolute',
    marginHorizontal: 24,
    height: 164,
    width: 164,
    zIndex: 5,
    elevation: 5,
    borderRadius: 9999,
    padding: 0,
  },
  foodName: {
    position: 'relative',
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 22,
    lineHeight: 22,
    top: 30,
    width: 130,
    height: 55,
    color: CUSTOM_COLOR.Black,
    opacity: 0.9,
    textAlign: 'center',
  },
  foodPrice: {
    color: CUSTOM_COLOR.Vermillion,
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'Bold',
    fontSize: 17,
    alignSelf: 'center',
    top: 50,
  },
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 50,
  },
});
