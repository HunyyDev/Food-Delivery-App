import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
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
import scale from '../../constants/responsive';
export class HomeScreen extends Component {
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
              <Text style={styles.SearchText}>Search</Text>
            </View>
          </>
        </>
        {/* Boding */}
        <>
          {/* <View>
            <ScrollView
              style={styles.ListText}
              horizontal={true}
              vertical={false}
              contentContainerStyle={styles.ContainerContent}>
              <Text style={styles.ItemText}>Foods</Text>
              <Text style={styles.ItemText}>Drinks</Text>
              <Text style={styles.ItemText}>Snacks</Text>
              <Text style={styles.ItemText}>Sauce</Text>
            </ScrollView>
          </View> */}
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
    left: scale(54.6),
  },
  ShoppingCart: {
    top: 66,
    right: scale(42),
  },
  containerText: {
    width: 190,
    height: 82,
    left: scale(50),
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
    width: scale(314),
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
    left: scale(35),
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
});
