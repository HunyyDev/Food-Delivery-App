import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import {ICCart, ICMenu} from '../../../assets/icons';
import styles from './styles';
import SCREEN_NAME from '../../../assets/constants/screens';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.icmenuContainer}>
          <ICMenu style={styles.icmenuContainer.icmenu} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iccarttyreContainer}
          onPress={() =>
            this.props.onNavigation.navigate(SCREEN_NAME.CART_SCREEN)
          }>
          <View style={styles.iccarttyreContainer.iccarttyre}>
            <ICCart />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
