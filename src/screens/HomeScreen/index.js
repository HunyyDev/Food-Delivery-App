import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';
import {UnderlineButton} from '../../assets/components/UnderlineButton';
<<<<<<< HEAD
<<<<<<< HEAD
import {CustomSwitch} from '../../assets/components/CustomSwitch';
=======
import scale from '../../assets/constants/reponsive';
import { UnderlineButton } from '../../assets/components/UnderlineButton';
import { CustomSwitch } from '../../assets/components/CustomSwitch';
>>>>>>> 80c1fa024402783905f09125366466ac97a2d8a7
=======
>>>>>>> 997980b42f3d6ca6110de8ba447273ae163ebc33
=======
>>>>>>> 3d9830577ea761f255b66429cc4b3b1de217c6ae
import {
  IMG_Vector,
  IMG_Cart,
  IMG_Search,
  IMG_Home,
  IMG_Heart,
  IMG_User,
  IMG_Clock,
} from '../../assets/images';
import {Drinks} from './DrinksForm';
import {Foods} from './FoodsForm';
import {Snacks} from './SnacksForm';
import {Sauce} from './SauceForm';
class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // render() {
  //   return this.props.label === 'Foods' ? (
  //     <Foods {...this.props.props} />
  //   ) : (
  //     <Drinks {...this.props.props} />
  //   );
  // }
  checkSwitch = props => {
    switch (props.label) {
      case 'Foods':
        this.FOODS();
        break;

      case 'Drinks':
        this.DRINKS();
        break;

      case 'Snacks':
        this.SNACKS();
        break;

      case 'Sauce':
        this.SAUCE();
        break;
    }
  };
  FOODS = props => {
    props.label === 'Foods';
  };
  DRINKS = props => {
    props.label === 'Drinks';
  };
  SNACKS = props => {
    props.label === 'Snacks';
  };
  SAUCE = props => {
    props.label === 'Sauce';
  };
  render() {
    if (this.props.label === 'Foods') {
      return <Foods />;
    } else {
      if (this.props.label === 'Drinks') {
        return <Drinks />;
      } else {
        if (this.props.label === 'Snacks') {
          return <Snacks />;
        } else {
          return <Sauce />;
        }
      }
    }
  }
}
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Foods',
    };
  }

  render() {
    return (
      <SafeAreaView
        style={styles.backgroundContainer}
        onPressHandle={() => {
          this.getData();
        }}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={IMG_Vector} style={styles.Menu} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartContainer}>
          <Image source={IMG_Cart} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Delicious \nfood for you'}</Text>
        </View>
        <View style={styles.searchContainer}>
          <Image source={IMG_Search} style={styles.searchImage} />
          <TextInput
            hitSlop={{top: '100%', left: '100%', right: '100%', bottom: '100%'}}
            placeholder={'Search'}
            style={styles.searchInput}
          />
        </View>
<<<<<<< HEAD
<<<<<<< HEAD
        <View style={styles.scrollView}>
          <CustomSwitch
            flexGrow={1}
            justifyContent={'center'}
            flexDirection={'row'}>
            <View style={styles.backgroundItem}>
              <View style={styles.backgroundTitle}>
                <UnderlineButton
                  onPress={() => this.setState({ label: 'Foods' })}
                  style={styles.button}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label === 'Foods'
                          ? CUSTOM_COLOR.Vermilion
                          : 'transparent',
                    },
                  ]}>
                  <Text style={styles.buttonText}>Foods</Text>
                </UnderlineButton>
              </View>
              <View style={styles.backgroundTitle}>
                <UnderlineButton
                  onPress={() => this.setState({ label: 'Drinks' })}
                  style={styles.buttonText}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label === 'Drinks'
                          ? CUSTOM_COLOR.Vermilion
                          : 'transparent',
                    },
                  ]}>
                  <Text style={styles.buttonText}>Drinks</Text>
                </UnderlineButton>
              </View>
              <View style={styles.backgroundTitle}>
                <UnderlineButton
                  onPress={() => this.setState({ label: 'Snacks' })}
                  style={styles.buttonText}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label === 'Snacks'
                          ? CUSTOM_COLOR.Vermilion
                          : 'transparent',
                    },
                  ]}>
                  <Text style={styles.buttonText}>Snacks</Text>
                </UnderlineButton>
              </View>
              <View style={styles.backgroundTitle}>
                <UnderlineButton
                  onPress={() => this.setState({ label: 'Sauce' })}
                  style={styles.buttonText}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label === 'Sauce'
                          ? CUSTOM_COLOR.Vermilion
                          : 'transparent',
                    },
                  ]}>
                  <Text style={styles.buttonText}>Sauce</Text>
                </UnderlineButton>
              </View>
            </View>
          </CustomSwitch>
        </View>
=======
=======
>>>>>>> 3d9830577ea761f255b66429cc4b3b1de217c6ae
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
          {/* <View style={styles.backgroundItem}> */}
          <View style={styles.backgroundTitle}>
            <UnderlineButton
              onPress={() => this.setState({label: 'Foods'})}
              style={styles.button}
              underlineStyle={[
                styles.underLine,
                {
                  backgroundColor:
                    this.state.label === 'Foods'
                      ? CUSTOM_COLOR.Vermilion
                      : CUSTOM_COLOR.Concrete,
                },
              ]}>
              <Text style={styles.buttonText}>Foods</Text>
            </UnderlineButton>
          </View>
          <View style={styles.backgroundTitle}>
            <UnderlineButton
              onPress={() => this.setState({label: 'Drinks'})}
              style={styles.button}
              underlineStyle={[
                styles.underLine,
                {
                  backgroundColor:
                    this.state.label === 'Drinks'
                      ? CUSTOM_COLOR.Vermilion
                      : CUSTOM_COLOR.Concrete,
                },
              ]}>
              <Text style={styles.buttonText}>Drinks</Text>
            </UnderlineButton>
          </View>
          <View style={styles.backgroundTitle}>
            <UnderlineButton
              onPress={() => this.setState({label: 'Snacks'})}
              style={styles.button}
              underlineStyle={[
                styles.underLine,
                {
                  backgroundColor:
                    this.state.label === 'Snacks'
                      ? CUSTOM_COLOR.Vermilion
                      : CUSTOM_COLOR.Concrete,
                },
              ]}>
              <Text style={styles.buttonText}>Snacks</Text>
            </UnderlineButton>
          </View>
          <View style={styles.backgroundTitle}>
            <UnderlineButton
              onPress={() => this.setState({label: 'Sauce'})}
              style={styles.button}
              underlineStyle={[
                styles.underLine,
                {
                  backgroundColor:
                    this.state.label === 'Sauce'
                      ? CUSTOM_COLOR.Vermilion
                      : CUSTOM_COLOR.Concrete,
                },
              ]}>
              <Text style={styles.buttonText}>Sauce</Text>
            </UnderlineButton>
          </View>
          {/* </View> */}
        </ScrollView>
<<<<<<< HEAD
>>>>>>> 997980b42f3d6ca6110de8ba447273ae163ebc33
=======
>>>>>>> 3d9830577ea761f255b66429cc4b3b1de217c6ae
        <View style={styles.viewTaskbar}>
          <Image style={styles.iconContainer} source={IMG_Home} />
          <Image style={styles.iconContainer} source={IMG_Heart} />
          <Image style={styles.iconContainer} source={IMG_User} />
          <Image style={styles.iconContainer} source={IMG_Clock} />
        </View>
        <Condition label={this.state.label} props={this.props} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.Concrete,
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    paddingVertical: 3,
    width: scale(550),
    height: scale(50),
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: scale(28),
    height: scale(20),
    top: scale(74),
    left: scale(54.6),
    position: 'absolute',
  },
  Menu: {
    resizeMode: 'cover',
    position: 'absolute',
  },
  cartContainer: {
    width: 'auto',
    height: 'auto',
    top: scale(66),
    right: scale(42),
    position: 'absolute',
  },
  title: {
    color: 'black',
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(34),
  },
  titleContainer: {
    width: 'auto',
    height: 'auto',
    top: scale(132),
    left: scale(50),
    position: 'absolute',
    justifyContent: 'space-around',
  },
  backgroundTitle: {
    width: '20%',
    height: 'auto',
    // backgroundColor: 'black',
  },
  searchContainer: {
    width: scale(380),
    height: scale(60),
    top: scale(242),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchImage: {
    left: scale(50),
    alignSelf: 'center',
  },
  searchInput: {
    left: scale(90),
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(17),
    alignSelf: 'center',
    width: scale(300),
    position: 'absolute',
  },
  scrollView: {
    // width: scale(450),
    top: scale(350),
    marginLeft: scale(100),
    left: scale(10),
    //backgroundColor: CUSTOM_COLOR.SunsetOrange,
    position: 'absolute',
  },
  backgroundItem: {
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: CUSTOM_COLOR.Black,
    position: 'absolute',
  },
  text1: {
    left: scale(50),
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.SFBlack,
    color: CUSTOM_COLOR.Vermilion,
    marginRight: scale(91),
  },
  viewTaskbar: {
    // width: scale(25),
    height: scale(25),
    width: '90%',
    bottom: scale(50.1),
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
  },
  iconContainer: {
    height: scale(25),
    width: '7%',
    alignSelf: 'center',
    bottom: scale(0),
  },
  underLine: {
<<<<<<< HEAD
<<<<<<< HEAD
    width: scale(90),
    height: scale(3),
=======
    width: scale(100),
    height: scale(4),
>>>>>>> 997980b42f3d6ca6110de8ba447273ae163ebc33
=======
    width: scale(100),
    height: scale(4),
>>>>>>> 3d9830577ea761f255b66429cc4b3b1de217c6ae
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 30,
  },
  button: {
    height: '70%',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: FONT_FAMILY.SFBlack,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});