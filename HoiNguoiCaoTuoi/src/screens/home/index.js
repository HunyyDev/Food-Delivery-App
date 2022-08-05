import React, {useRef, useState} from 'react';
import {
  DrawerLayoutAndroid,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CUSTOM_COLOR from '../../constants/colors';
import {TextInput} from 'react-native-gesture-handler';
import {
  IMG_avatar,
  IMG_giohang,
  IMG_heart,
  IMG_house,
  IMG_Logo1,
  IMG_offer_and_promo,
  IMG_orders,
  IMG_privacy_policy,
  IMG_search,
  IMG_security,
  IMG_time,
  IMG_user,
  IMG_profile,
} from '../../assets/icons';
import {IMG_Food1, IMG_Food2} from '../../assets/images/index';
import FONT_FAMILY from '../../constants/fonts';
import {scaleWidth} from '../../constants/responsive';

const HomeScreen = ({navigation}) => {
  const FOODS = 'FOODS';
  const DRINKS = 'DRINKS';
  const SNACKS = 'SNACKS';
  const SAUCES = 'SAUCES';
  const [state, setPage] = useState(FOODS);
  const drawer = useRef(null);
  const [drawerPosition] = useState('left');
  const navigationView = () => (
    <SafeAreaView style={styles.containerDrawer}>
      <View style={styles.navigationContainer}>
        <Image source={IMG_avatar} style={styles.avartar} />
        <View style={styles.options}>
          <View style={styles.line_options}>
            <Image source={IMG_profile} />
            <Text style={styles.paragraph}>{'Profile'}</Text>
          </View>
          <Text style={styles.paragraph}>{'________________'}</Text>
          <View style={styles.line_options}>
            <Image source={IMG_orders} />
            <Text style={styles.paragraph}>{'Orders'}</Text>
          </View>
          <Text style={styles.paragraph}>{'________________'}</Text>
          <View style={styles.line_options}>
            <Image source={IMG_offer_and_promo} />
            <Text style={styles.paragraph}>{'Offer and promo'}</Text>
          </View>
          <Text style={styles.paragraph}>{'________________'}</Text>
          <View style={styles.line_options}>
            <Image source={IMG_privacy_policy} />
            <Text style={styles.paragraph}>{'Privacy policy'}</Text>
          </View>
          <Text style={styles.paragraph}>{'________________'}</Text>
          <View style={styles.line_options}>
            <Image source={IMG_security} />
            <Text style={styles.paragraph}>{'Security'}</Text>
          </View>
        </View>

        <TouchableOpacity
          title="Sign-out"
          onPress={() => drawer.current.closeDrawer()}
          style={styles.signout}
        />
      </View>
    </SafeAreaView>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              onPress={() => drawer.current.openDrawer()}>
              <Image source={IMG_Logo1} style={styles.icon1} />
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              onPress={() => navigation.navigate('History')}>
              <Image source={IMG_giohang} style={styles.icon2} />
            </TouchableOpacity>
          </View>

          <Text style={styles.tittle}>{'Delicious \nfood for you'} </Text>

          <View>
            <View style={styles.Searchbar}>
              <Image source={IMG_search} style={styles.search} />
              <TextInput style={styles.searchText} placeholder="Search" />
            </View>
          </View>

          <View style={styles.list}>
            <TouchableOpacity
              style={styles.TextMenu}
              onPress={() => {
                setPage(FOODS);
              }}>
              <Text style={styles.searchText}>{'Foods'}</Text>
              {state === FOODS ? <View style={styles.line} /> : null}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.TextMenu}
              onPress={() => {
                setPage(DRINKS);
              }}>
              <Text style={styles.searchText}>{'Drinks'}</Text>
              {state === DRINKS ? <View style={styles.line} /> : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TextMenu}
              onPress={() => {
                setPage(SNACKS);
              }}>
              <Text style={styles.searchText}>{'Snacks'}</Text>
              {state === SNACKS ? <View style={styles.line} /> : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TextMenu}
              onPress={() => {
                setPage(SAUCES);
              }}>
              <Text style={styles.searchText}>{'Sauces'}</Text>
              {state === SAUCES ? <View style={styles.line} /> : null}
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.seemore}>{'see more'}</Text>
          </TouchableOpacity>

          <ScrollView
            style={styles.Scroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.dish}>
              <Image source={IMG_Food2} style={styles.img} />
              <Text style={styles.TextMenu}>{'Veggie\ntomato mix'}</Text>
              <Text style={styles.TextMenu1}>{'N1,900'}</Text>
            </View>
            <View style={styles.dish}>
              <Image source={IMG_Food2} style={styles.img} />
              <Text style={styles.TextMenu}>{'Veggie\ntomato mix'}</Text>
              <Text style={styles.TextMenu1}>{'N1,900'}</Text>
            </View>
            <View style={styles.dish}>
              <Image source={IMG_Food2} style={styles.img} />
              <Text style={styles.TextMenu}>{'Veggie\ntomato mix'}</Text>
              <Text style={styles.TextMenu1}>{'N1,900'}</Text>
            </View>
            <View style={styles.dish}>
              <Image source={IMG_Food1} style={styles.img1} />
              <Text style={styles.TextMenu}> {'Spicy fish\nsauce'} </Text>
              <Text style={styles.TextMenu1}>{'N2,300.99'}</Text>
            </View>
          </ScrollView>

          <View style={styles.list1}>
            <TouchableOpacity>
              <Image source={IMG_house} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={IMG_heart} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={IMG_user} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={IMG_time} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  containerDrawer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Vermilion,
  },
  navigationContainer: {
    alignItems: 'center',
  },
  paragraph: {
    fontSize: scaleWidth(17),
    textAlign: 'center',
    color: CUSTOM_COLOR.White,
    left: scaleWidth(10),
  },
  avartar: {
    top: scaleWidth(65),
  },
  options: {
    top: scaleWidth(100),
    width: scaleWidth(177),
  },
  line_options: {
    flexDirection: 'row',
    marginTop: scaleWidth(20),
  },
  signout: {
    color: CUSTOM_COLOR.White,
  },
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleWidth(40),
  },

  tittle: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: scaleWidth(34),
    marginLeft: '10%',
    marginTop: scaleWidth(30),
    marginBottom: scaleWidth(25),
  },

  list: {
    marginLeft: scaleWidth(30),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 5,
    paddingHorizontal: scaleWidth(10),
    fontFamily: FONT_FAMILY.Thin,
  },

  icon1: {
    width: scaleWidth(22),
    height: scaleWidth(15),
    marginLeft: scaleWidth(20),
  },
  icon2: {
    width: scaleWidth(24),
    height: scaleWidth(18),
    marginRight: scaleWidth(10),
  },

  img: {
    height: scaleWidth(220),
    width: scaleWidth(220),
    borderRadius: 220 / 2,
    alignSelf: 'center',
    margin: -50,
    top: 0,
  },

  search: {
    width: scaleWidth(18),
    height: scaleWidth(18),
    marginLeft: 20,
    alignSelf: 'center',
  },

  searchText: {
    fontSize: scaleWidth(17),
    fontFamily: FONT_FAMILY.SFPro,
    textAlign: 'center',
    marginLeft: 10,
  },

  TextMenu1: {
    fontSize: scaleWidth(17),
    fontFamily: FONT_FAMILY.SFPro,
    color: CUSTOM_COLOR.SunsetOrange,
    textAlign: 'center',
  },

  TextMenu: {
    fontSize: scaleWidth(20),
    fontColor: 'black',
    fontFamily: FONT_FAMILY.SFPro,
    textAlign: 'center',
  },

  Searchbar: {
    margin: scaleWidth(30),
    flexDirection: 'row',
    paddingHorizontal: scaleWidth(10),
    borderRadius: scaleWidth(20),
    height: scaleWidth(60),
    width: scaleWidth(330),
    backgroundColor: CUSTOM_COLOR.Gallery,
    fontFamily: FONT_FAMILY.SFPro,
    fontSize: scaleWidth(17),
    left: scaleWidth(10),
  },

  seemore: {
    left: scaleWidth(305),
    fontSize: scaleWidth(15),
    fontFamily: FONT_FAMILY.SFPro,
    margin: 10,
    color: CUSTOM_COLOR.SunsetOrange,
  },

  dish: {
    borderRadius: scaleWidth(40),
    backgroundColor: CUSTOM_COLOR.White,
    height: scaleWidth(260),
    width: scaleWidth(200),
    margin: scaleWidth(15),
    top: 20,
    justifyContent: 'center',
  },
  list1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(40),
    paddingVertical: scaleWidth(40),
  },
  line: {
    height: 3,
    width: 65,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    position: 'absolute',
    alignSelf: 'baseline',
    bottom: 0,
    left: 5,
  },
  Scroll: {
    backgroundColor: CUSTOM_COLOR.Concrete,
    height: scaleWidth(300),
    margin: scaleWidth(0),
  },
  img1: {
    height: scaleWidth(150),
    width: scaleWidth(150),
    borderRadius: 150 / 2,
    alignSelf: 'center',
    top: -50,
    marginBottom: -30,
  },
});

export default HomeScreen;
