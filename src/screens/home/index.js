import React, {useMemo, useState} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';

import UnderlineButton from '../../components/UnderlineButton';

import COLORS from '../../constants/colors';

import {
  IMG_MORE,
  IMG_SEARCH,
  IMG_SHOPPING_CART,
  IMG_FIRST_ILLUSTRATION,
  IMG_HOME,
  IMG_HEART,
  IMG_USER,
  IMG_HISTORY,
} from '../../assets/images';

import styles from './styles';

const HomeScreen = () => {
  const categoryList = useMemo(
    () => ['Foods', 'Drinks', 'Snacks', 'Sauce'],
    [],
  );

  const productList = useMemo(
    () => [
      {
        id: 1,
        source: IMG_FIRST_ILLUSTRATION,
        title: 'Veggie tomato mix',
        price: 'N1,900',
      },
      {
        id: 2,
        source: IMG_FIRST_ILLUSTRATION,
        title: 'Spicy fish sauce',
        price: 'N2,300.99',
      },
      {
        id: 3,
        source: IMG_FIRST_ILLUSTRATION,
        title: 'Veggie tomato mix',
        price: 'N1,900',
      },
      {
        id: 4,
        source: IMG_FIRST_ILLUSTRATION,
        title: 'Spicy fish sauce',
        price: 'N2,300.99',
      },
    ],
    [],
  );

  const [tab, setTab] = useState(categoryList[0]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.navigationBar}>
        <Image source={IMG_MORE} />
        <Image source={IMG_SHOPPING_CART} />
      </View>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Delicious food for you</Text>
      </View>
      <View style={styles.searchWrapper}>
        <Image style={styles.searchIcon} source={IMG_SEARCH} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLORS.LIGHT_BLACK}
          style={styles.searchInput}
        />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.categoryWrapper}>
          {categoryList.map(item => (
            <View style={styles.categoryItem} key={item}>
              <UnderlineButton
                isChoosing={tab === item}
                onPress={() => setTab(item)}
                textStyle={styles.categoryText(tab === item)}>
                {item}
              </UnderlineButton>
            </View>
          ))}
        </View>
      </ScrollView>
      <ScrollView horizontal>
        <View style={styles.productWrapper}>
          {productList.map(({id, source, title, price}) => (
            <View key={id} style={styles.productItem}>
              <Image
                style={styles.imageWrapper}
                source={source}
                resizeMode="cover"
              />
              <View style={styles.productInfo}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.priceText}>{price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Image style={styles.chosenIcon} source={IMG_HOME} />
        <Image source={IMG_HEART} />
        <Image source={IMG_USER} />
        <Image source={IMG_HISTORY} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
