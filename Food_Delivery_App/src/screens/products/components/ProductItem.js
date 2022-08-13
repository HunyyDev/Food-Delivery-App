import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductItem = props => {
  const {navigation} = props;
  const {src} = props;
  const {name} = props;
  const {cost} = cost;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ProductDetailScreen');
        }}>
        <Image source={{src}} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.cost}>{cost}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {},
  button: {
    flex: 1,
  },
  image: {},
  name: {},
  cost: {},
});
