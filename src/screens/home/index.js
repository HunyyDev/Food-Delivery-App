import {DrawerActions} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
import {IMG_Product_1, IMG_Product_2, IMG_Product_3} from '../../assets/images';
import ButtonHome from '../../components/ButtonHome';
import ButtonProduct from '../../components/ButtonProduct';
import COLORS from '../../constants/colors';
import SCREEN_NAME from '../../constants/screens';
import styles from './styles';
// import {createDrawerNavigator} from '@react-navigation/drawer';

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
      source: IMG_Product_2,
      title: 'Egg and cucumber...',
      price: 'N1,900',
    },
    {
      id: 3,
      source: IMG_Product_3,
      title: 'Fried chicken m.',
      price: 'N2,300.99',
    },
    {
      id: 4,
      source: IMG_Product_1,
      title: 'Spicy fish sauce',
      price: 'N2,300.99',
    },
  ];

  ButtonAlert = () => {
    Alert.alert('Hello', 'Het hang!', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
      },
    ]);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <>
          <View style={styles.MenuContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }>
              <Image style={styles.IconMenu} source={ICON_Menu} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(SCREEN_NAME.CART)}
              style={styles.IconShop}>
              <Image source={ICON_shop} />
            </TouchableOpacity>
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
              <TextInput
                style={styles.TextSearch}
                placeholder={'Search'}
                placeholderTextColor={COLORS.Light_Black}
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
                <ButtonProduct
                  key={id}
                  title={title}
                  source={source}
                  price={price}
                />
              ))}
            </View>
          </ScrollView>
        </>
        <>
          <View style={styles.footer}>
            <Image style={styles.chosenIcon} source={ICON_home} />
            <Image source={ICON_heart} />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Information')}>
              <Image source={ICON_user} />
            </TouchableOpacity>
            <Image source={ICON_clock} />
          </View>
        </>
      </ScrollView>
    );
  }
}
