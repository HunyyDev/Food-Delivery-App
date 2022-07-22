import React from 'react';
import {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  IMG_MAGNIFIER,
  IMG_MENU,
  IMG_TROLLEY,
  IMG_VEGGIE,
  IMG_HEART,
  IMG_HISTORY,
  IMG_HOUSE,
  IMG_USER,
} from '../../assets/images';
import Menu from '../../components/Menu/Menu';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import Dish from '../../components/Dish/Dish';

const Home = props => {
  const [chosenList, setChosenList] = useState([true, false, false, false]);

  const clicked = chosen => {
    let list = [];
    for (let i = 0; i < 4; i++) {
      list[i] = false;
    }
    list[chosen] = true;
    setChosenList(list);
  };

  return (
    <ScrollView>
      <View style={styles.options}>
        <Image source={IMG_MENU} resizeMode="contain" />
        <Image source={IMG_TROLLEY} resizeMode="contain" />
      </View>
      <View>
        <Text style={styles.text}>Delicious{'\n'}food for you</Text>
      </View>
      <View style={styles.findFrame}>
        <Image source={IMG_MAGNIFIER} />
        <Text style={styles.textFind}>Search</Text>
      </View>
      <ScrollView horizontal>
        <View style={styles.textMenuFrame}>
          <Menu isChosen={chosenList[0]} onPress={() => clicked(0)}>
            Foods
          </Menu>
          <Menu isChosen={chosenList[1]} onPress={() => clicked(1)}>
            Drinks
          </Menu>
          <Menu isChosen={chosenList[2]} onPress={() => clicked(2)}>
            Snacks
          </Menu>
          <Menu isChosen={chosenList[3]} onPress={() => clicked(3)}>
            Sauce
          </Menu>
        </View>
      </ScrollView>
      <Text style={styles.seeMore}>see more</Text>
      <ScrollView horizontal>
        <Dish price="N6,500">Beef{'\n'}salad mix</Dish>
        <Dish price="N1,900">Veggie{'\n'}tomato mix</Dish>
        <Dish price="N2,300">Spicy fish{'\n'}sauce</Dish>
      </ScrollView>
      <View style={styles.properties}>
        <Image source={IMG_HOUSE} />
        <Image source={IMG_HEART} />
        <Image source={IMG_USER} />
        <Image source={IMG_HISTORY} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 74,
    marginLeft: 54.6,
    marginRight: 42,
    backgroundColor: COLORS.CONCRETEE,
  },
  text: {
    color: COLORS.BLACK,
    fontSize: 34,
    fontFamily: FONT_FAMILY.SF_PRO_ROUNDED_BOLD,
    marginLeft: 50,
    marginTop: 43.33,
  },
  findFrame: {
    flexDirection: 'row',
    backgroundColor: COLORS.GALLERY,
    marginLeft: 50,
    paddingLeft: 35,
    borderRadius: 30,
    height: 60,
    marginRight: 50,
    paddingTop: 21,
  },
  textFind: {
    fontFamily: FONT_FAMILY.SF_PRO_ROUNDED_REGULAR,
    marginLeft: 16,
    marginTop: -8,
    fontSize: 17,
    opacity: 0.5,
    color: COLORS.BLACK,
  },
  textMenuFrame: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 91,
  },
  seeMore: {
    fontSize: 15,
    color: COLORS.VERMILION,
    marginRight: 41,
    marginTop: 45,
    alignSelf: 'flex-end',
  },

  properties: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 52,
  },
});
export default Home;
