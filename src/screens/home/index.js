import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {
  ICON_33,
  ICON_clock,
  ICON_heart,
  ICON_home,
  ICON_Menu,
  ICON_shop,
  ICON_user,
} from '../../assets/icons';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import ButtonHome from '../../components/ButtonHome';
import {IMG_Background, IMG_Logo, IMG_Product_1} from '../../assets/images';
import styles from './styles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'Foods',
    };
  }
  productList = [
    {
      id: 1,
      source: IMG_Product_1,
      title: 'Veggie tomato mix',
      price: 'N1,900',
    },
    {
      id: 2,
      source: IMG_Product_1,
      title: 'Spicy fish sauce',
      price: 'N2,300.99',
    },
    {
      id: 3,
      source: IMG_Product_1,
      title: 'Veggie tomato mix',
      price: 'N1,900',
    },
    {
      id: 4,
      source: IMG_Product_1,
      title: 'Spicy fish sauce',
      price: 'N2,300.99',
    },
  ];
  render() {
    return (
      <ScrollView style={styles.container}>
        <>
          <View style={styles.MenuContainer}>
            <Image source={ICON_Menu} style={styles.IconMenu} />
            <Image source={ICON_shop} style={styles.IconShop} />
          </View>
        </>
        <>
          <View style={styles.TextContainer}>
            <Text style={styles.Text}>Delicious{'\n'}food for you</Text>
          </View>
        </>
        <>
          <View style={styles.SearchContainer}>
            <View style={styles.Search}>
              <Image source={ICON_33} style={styles.IconSearch} />
              {/* <Text style={styles.TextSearch}>Search</Text> */}
              <TextInput
                style={styles.TextSearch}
                placeholder={'Search'}
                placeholderTextColor={CUSTOM_COLOR.Light_Black}
              />
            </View>
          </View>
        </>
        <>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[styles.navigationBar, styles.TitleContainer]}>
              <ButtonHome
                onPress={() => this.setState({tab: 'Foods'})}
                isChoosing={this.state.tab === 'Foods'}>
                Foods
              </ButtonHome>
              <ButtonHome
                onPress={() => this.setState({tab: 'Drinks'})}
                isChoosing={this.state.tab === 'Drinks'}>
                Drinks
              </ButtonHome>
              <ButtonHome
                onPress={() => this.setState({tab: 'Snacks'})}
                isChoosing={this.state.tab === 'Snacks'}>
                Snacks
              </ButtonHome>
              <ButtonHome
                onPress={() => this.setState({tab: 'Sauce'})}
                isChoosing={this.state.tab === 'Sauce'}>
                Sauce
              </ButtonHome>
            </View>
          </ScrollView>
        </>
        <>
          <View style={styles.SeeMore}>
            <Text style={styles.TextSeeMore}>see more</Text>
          </View>
        </>
        <>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.productWrapper}>
              {this.productList.map(({id, source, title, price}) => (
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
        </>
        <>
          <View style={styles.footer}>
            <Image style={styles.chosenIcon} source={ICON_home} />
            <Image source={ICON_heart} />
            <Image source={ICON_user} />
            <Image source={ICON_clock} />
          </View>
        </>
      </ScrollView>
    );
  }
}
