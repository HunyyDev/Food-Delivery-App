import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import styles from './styles';
import {ICHeart, ICHome, ICTime, ICUser} from '../../../assets/icons';
import colors from '../../../assets/constants/colors';

const iconListComponent = [<ICHome />, <ICHeart />, <ICUser />, <ICTime />];

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }

  onSelectButton = index => {
    this.setState({selected: index});
  };

  render() {
    return (
      <View style={styles.container}>
        {iconListComponent.map((Component, index) => {
          return (
            <TouchableOpacity
              style={styles.icon}
              key={index}
              onPress={() => this.onSelectButton(index)}>
              {React.cloneElement(Component, {
                fill: this.state.selected === index ? colors.VERMILION : 'none',
              })}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}