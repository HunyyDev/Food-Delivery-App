import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {
  IC_Menu,
  IC_MenuTask,
  IC_Cart,
  IC_Search,
  IMG_Home,
  IMG_Heart,
  IMG_User,
  IMG_Clock,
} from '../.././assets/icons';
import CUSTOM_COLOR from '../.././constants/colors';
import FONT_FAMILY from '../.././constants/fonts';
import scale from '../.././constants/responsive';
const Items = props => {
  return (
    <View style={styles.Item}>
      <IC_Menu style={styles.Image_Container} />
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>Veggie</Text>
        <Text style={styles.Text}>Tomato mix</Text>
      </View>
      <Text style={styles.Text2}>N1,900</Text>
    </View>
  );
};
const Menus = props => {
  return (
    <View style={styles.Scroll_View_Item}>
      <Text style={styles.MenuText}>{props.label}</Text>
      <View style={styles.Space} />
    </View>
  );
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <IC_MenuTask />
          <IC_Cart />
          <Text style={styles.delicious}>Delicious food for you</Text>
          <View style={styles.SearchView}>
            <IC_Search top={20} left={20} />
            <Text style={styles.search}>Search</Text>
          </View>
          <>
            <ScrollView style={styles.Scroll_View_Navigation} horizontal={true}>
              <View style={[styles.Scroll_View_Item]}>
                <Text style={[styles.MenuText, styles.OrangeText]}>Foods</Text>
                <View style={[styles.Space, styles.OrangeLine]} />
              </View>
              <Menus label="Drinks" />
              <Menus label="Snacks" />
              <Menus label="Sauces" />
              <Menus label="Others" />
            </ScrollView>
          </>
          <Text style={styles.SeeMoreText}>see more</Text>
          <View style={styles.Scroll_View}>
            <ScrollView style={styles.Scroll_View_Container} horizontal={true}>
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </ScrollView>
          </View>
          <View style={styles.NavigationBottomBar}>
            <Image style={styles.HomeStyle} source={IMG_Home} />
            <Image style={styles.HeartStyle} source={IMG_Heart} />
            <Image style={styles.UserStyle} source={IMG_User} />
            <Image style={styles.ClockStyle} source={IMG_Clock} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5C4C4',
  },
  delicious: {
    position: 'absolute',
    width: scale(185),
    height: scale(100),
    left: scale(50),
    top: scale(115),

    fontFamily: FONT_FAMILY.SFProRH,
    fontSize: 34,

    color: '#000000',
  },
  SearchView: {
    position: 'absolute',
    width: scale(314),
    height: scale(60),
    left: scale(50),
    top: scale(232),

    backgroundColor: '#EFEEEE',
    borderRadius: 30,
  },
  search: {
    position: 'absolute',
    width: scale(70),
    height: scale(30),
    left: scale(50),
    top: scale(20),
    fontSize: 17,
    color: '#000000',
  },
  Space: {
    width: scale(87),
    height: scale(3),
    borderRadius: 30,
  },
  MenuText: {
    marginBottom: scale(10),
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 20,
  },
  Scroll_View_Item: {
    position: 'relative',
    top: scale(280),
    alignItems: 'center',
    height: scale(30),
  },
  Scroll_View_Navigation: {
    marginLeft: scale(75),
  },
  OrangeText: {
    color: CUSTOM_COLOR.SunsetOrange,
  },
  OrangeLine: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  Scroll_View: {
    position: 'absolute',
    top: scale(390),
    flexDirection: 'row',
    width: '100%',
    height: 2,
    overflow: 'visible',
  },
  Scroll_View_Text: {
    position: 'absolute',
    top: scale(200),
    flexDirection: 'row',
    width: '100%',
    height: 1,
    overflow: 'visible',
  },
  Item: {
    flex: 1,
    width: scale(200),
    height: scale(270),
    borderRadius: 25,
    backgroundColor: CUSTOM_COLOR.White,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    top: scale(50),
  },
  Scroll_View_Container: {
    height: scale(320),
  },
  Image_Container: {
    position: 'absolute',
    top: scale(-50),
    left: scale(-25),
    zIndex: 3,
  },
  Text: {
    color: '#000',
    opacity: 0.9,
    fontSize: 22,
    alignItems: 'center',
  },
  Text2: {
    position: 'absolute',
    top: scale(205),
    color: CUSTOM_COLOR.SunsetOrange,
    opacity: 0.9,
    fontSize: 17,
  },
  TextContainer: {
    position: 'absolute',
    top: scale(130),
    alignItems: 'center',
  },
  SeeMoreText: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Light,
    position: 'absolute',
    top: scale(360),
    left: scale(300),
    fontSize: 15,
  },
  NavigationBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(50),
    marginRight: scale(52),
    alignItems: 'center',
    top: scale(-20),
  },
  HomeStyle: {
    marginTop: 3,
    width: scale(25),
    height: scale(25),
  },
  HeartStyle: {
    width: scale(24),
    height: 24,
  },
  UserStyle: {
    width: 24,
    height: 24,
  },
  ClockStyle: {
    width: 26,
    height: 24,
  },
});
export default HomeScreen;
