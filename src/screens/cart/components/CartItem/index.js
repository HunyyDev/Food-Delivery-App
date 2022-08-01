import {Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {IC_Add, IC_Minus, IC_Heart} from '../../icons';
import {styles} from './styles';

const CartItem = props => {
  const {food, name, price, amount, ...moreProps} = props;
  return (
    <View style={styles.container} {...moreProps}>
      <ScrollView horizontal pagingEnabled={true}>
        <View style={styles.foodContainer}>
          <Image source={food} style={styles.food} resizeMode="contain" />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.amountContainer}>
            <Image source={IC_Minus} />
            <Text style={styles.number}>{amount}</Text>
            <Image source={IC_Add} />
          </View>
        </View>
        <View style={styles.option}>
          <View style={styles.circle}>
            <Image
              source={IC_Heart}
              resizeMode="contain"
              resizeMethod="scale"
            />
          </View>
          <View style={styles.circle}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartItem;
