import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/color';
import {IC_OptionButton} from '../../assets/icons';
import {IC_Heart} from '../../assets/icons';
import {IC_Home} from '../../assets/icons';
import {IC_SharpHistory} from '../../assets/icons';
import {IC_MagnifyingGlass} from '../../assets/icons';
import {IC_ShoppingCart} from '../../assets/icons';
import {IC_User} from '../../assets/icons';
import {scale} from '../../constants/reponsive';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Option button */}
        <>
          <View>
            <Image source={IC_OptionButton} style={styles.optionButton} />
          </View>
        </>

        {/* Shopping cart */}
        <>
          <View>
            <Image source={IC_ShoppingCart} style={styles.shoppingCart} />
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
    backgroundColor: CUSTOM_COLOR.Cloud,
  },

  optionButtonContainer: {},

  optionButton: {
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
    width: scale(22),
    height: scale(14.67),
    marginTop: scale(74),
    marginLeft: scale(54.6),
  },

  shoppingCartContainer: {},

  shoppingCart: {
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
    width: scale(24),
    height: scale(24),
    left: scale(349),
    top: scale(65),
    opacity: 0.3,
  },

  heartContainer: {},

  heart: {
    color: CUSTOM_COLOR.Black,
  },

  
});
