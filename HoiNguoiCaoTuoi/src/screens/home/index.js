import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import CUSTOM_COLOR from '../../constants/colors';
// import CustomFood from '../../components/CustomFood';
import {scaleWidth} from '../../constants/responsive';
import {IMG_Food1, IMG_Food2} from '../../assets/images/index';
import FONT_FAMILY from '../../constants/fonts';
import {
  IMG_giohang,
  IMG_Logo1,
  IMG_search,
  IMG_house,
  IMG_heart,
  IMG_user,
  IMG_time,
} from '../../assets/icons';
import {TextInput} from 'react-native-gesture-handler';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            <Text style={styles.TextMenu}> {'Foods'} </Text>
            <Text style={styles.TextMenu}> {'Drinks'} </Text>
            <Text style={styles.TextMenu}> {'Snacks'} </Text>
            <Text style={styles.TextMenu}> {'Sauces'} </Text>
          </View>

          <View>
            <Text style={styles.seemore}>{'see more'}</Text>
          </View>

          <ScrollView
            style={styles.scrollMenu}
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
              <Image source={IMG_Food1} style={styles.img} />
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
  }
}

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
    marginTop: scaleWidth(43),
    marginBottom: scaleWidth(28),
  },

  list: {
    marginLeft: scaleWidth(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleWidth(40),
  },

  icon1: {
    width: scaleWidth(22),
    height: scaleWidth(15),
  },
  icon2: {
    width: scaleWidth(24),
    height: scaleWidth(18),
  },

  img: {
    height: scaleWidth(150),
    width: scaleWidth(150),
  },

  search: {
    width: scaleWidth(18),
    height: scaleWidth(18),
  },

  searchText: {
    fontSize: scaleWidth(17),
    fontFamily: FONT_FAMILY.SFPro,
  },

  TextMenu1: {
    fontSize: scaleWidth(17),
    fontColor: CUSTOM_COLOR.Vermilion,
  },

  TextMenu: {
    fontSize: scaleWidth(22),
    fontColor: 'black',
  },

  Searchbar: {
    marginTop: scaleWidth(20),
    flexDirection: 'row',
    paddingHorizontal: scaleWidth(10),
    borderRadius: scaleWidth(20),
    height: scaleWidth(60),
    width: scaleWidth(314),
    backgroundColor: CUSTOM_COLOR.Gallery,
    fontFamily: FONT_FAMILY.SFPro,
    fontSize: scaleWidth(17),
    left: scaleWidth(50),
  },

  seemore: {
    left: scaleWidth(315),
    fontSize: scaleWidth(15),
    fontColor: CUSTOM_COLOR.Vermilion,
  },

  dish: {
    borderRadius: scaleWidth(50),
    backgroundColor: CUSTOM_COLOR.White,
    height: scaleWidth(270),
    width: scaleWidth(150),
  },

  scrollMenu: {},

  list1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleWidth(40),
  },
});

export default HomeScreen;
