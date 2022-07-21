import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import ListButton from '../../components/ListButton';
import scaleWidth from '../../constants/responsive';
import CustomDish from '../../components/CustomDish';

import {IMG_dish1, IMG_dish2} from '../../assets/images/images';
import {
  IMG_Menu,
  IMG_Search,
  IMG_Shopping_cart,
  IMG_Heart,
  IMG_Home,
  IMG_History,
  IMG_User,
} from '../../assets/images/images';
import FONT_FAMILY from '../../constants/fonts';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classify: 'Foods',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Heading */}
        <>
          {/* Tab bar */}
          <>
            <View style={styles.TabBar}>
              <Image style={styles.Menu} source={IMG_Menu} />
              <Image
                style={styles.ShoppingCart}
                source={IMG_Shopping_cart}></Image>
            </View>
          </>
          {/* Content */}
          <>
            <View style={styles.containerText}>
              <Text style={styles.Content}>Delicious food for you</Text>
            </View>
          </>
          {/* Search */}
          <>
            <View style={styles.Search}>
              <Image style={styles.SearchLogo} source={IMG_Search}></Image>
              <TextInput style={styles.SearchText}>Search</TextInput>
            </View>
          </>
        </>
        {/* Boding */}
        <>
          <View style={styles.containerBoding}>
            <ListButton
              style={styles.ListButton}
              values={['Foods', 'Drinks', 'Snacks', 'Sauce']}
              selectedValue={this.state.classify}
              setSelectedValue={value => {
                this.setState({classify: value});
              }}
            />

            <TouchableOpacity style={styles.seemoreContainer}>
              <Text style={styles.seemoreButton}>see more</Text>
            </TouchableOpacity>

            <ScrollView
              style={styles.MenuScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: scaleWidth(5),
                paddingHorizontal: scaleWidth(15),
              }}>
              <CustomDish
                source={IMG_dish2}
                name={'Veggie\ntomato mix'}
                cost="N1,900"
              />
              <CustomDish
                source={IMG_dish1}
                name={'Veggie\ntomato mix'}
                cost="N1,900"
              />
              <CustomDish
                source={IMG_dish2}
                name={'Spicy fish\nsauce'}
                cost="N2,300.99"
              />
            </ScrollView>
          </View>
        </>
        {/* Bottom */}
        <>
          <View style={styles.BottomContainer}>
            <Image source={IMG_Home}></Image>
            <Image source={IMG_Heart}></Image>
            <Image source={IMG_User}></Image>
            <Image source={IMG_History}></Image>
          </View>
        </>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
  },
  TabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
  },
  Menu: {
    top: 65,
    left: scaleWidth(54.6),
  },
  ShoppingCart: {
    top: 66,
    right: scaleWidth(42),
  },
  containerText: {
    width: 190,
    height: 82,
    left: scaleWidth(50),
    top: 136,
  },
  Content: {
    fontSize: 34,
    lineHeight: 40.57,
    fontFamily: FONT_FAMILY.Light,
    fontWeight: '700',
    color: CUSTOM_COLOR.Black,
  },
  Search: {
    top: 242,
    width: scaleWidth(314),
    height: 60,
    backgroundColor: CUSTOM_COLOR.Gallery,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  LogoSearch: {
    flex: 0.2,
    left: scaleWidth(35),
  },
  SearchText: {
    flex: 0.8,
    left: 16,
    fontSize: 17,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Black,
    fontWeight: '600',
  },
  BottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  seemoreButton: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    color: CUSTOM_COLOR.Vermilion,
    fontSize: scaleWidth(15),
  },
  seemoreContainer: {
    alignItems: 'flex-end',
    marginRight: scaleWidth(41),
  },
  MenuScroll: {
    maxHeight: scaleWidth(350),
  },
  ListButton: {
    maxHeight: scaleWidth(40),
    marginBottom: scaleWidth(39),
  },
  containerBoding: {
    top: 230,
  },
});
