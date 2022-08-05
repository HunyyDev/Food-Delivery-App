import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CUSTOM_COLOR from '../../constants/colors';
// import CustomFood from '../../components/CustomFood';
import {TextInput} from 'react-native-gesture-handler';
import {
  IMG_giohang,
  IMG_heart,
  IMG_house,
  IMG_Logo1,
  IMG_search,
  IMG_time,
  IMG_user,
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
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={IMG_Logo1} style={styles.icon1} />
          </TouchableOpacity>
          <TouchableOpacity>
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

        <View>
          <Text style={styles.seemore}>{'see more'}</Text>
        </View>

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
  );
};

const styles = StyleSheet.create({
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
    fontColor: CUSTOM_COLOR.Vermilion,
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
    fontColor: CUSTOM_COLOR.Vermilion,
    margin: 10,
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
    width: 70,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
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
