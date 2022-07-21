import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';

export default class FoodCard extends Component {
  render() {
    return (
      <View style={styles.foodCard}>
        <Image
          source={this.props.img}
          resizeMode="cover"
          style={styles.foodCard.imgSection}
        />
        <View style={styles.foodCard.cardBg}>
          <Text style={styles.foodCard.cardBg.foodName}>
            {this.props.foodName}
          </Text>
          <Text style={styles.foodCard.cardBg.foodPrice}>
            {this.props.price}
          </Text>
        </View>
      </View>
    );
  }
}
