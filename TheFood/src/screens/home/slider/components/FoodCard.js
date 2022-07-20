import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';

export default class FoodCard extends Component {
  render() {
    return (
      <View style={styles.foodCard}>
        <View style={styles.foodCard.imgSection}>
          <Image
            source={{
              uri: `https://i.picsum.photos/id/134/300/300.jpg?grayscale&hmac=ee0aHrHql4bEj1dfr72-GXI28XPtfvzxOoHAtZsB6aE`,
            }}
            resizeMode="cover"
          />
        </View>
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
