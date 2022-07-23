import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import {ICSearch} from '../../../assets/icons';
import styles from './styles';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icsearch}>
          <ICSearch />
        </View>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
    );
  }
}
