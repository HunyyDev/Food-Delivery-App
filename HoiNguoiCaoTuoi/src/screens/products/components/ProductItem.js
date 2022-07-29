import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProductItem = props => {
  const {item} = props;

  const onDetail = () => {};
  return (
    <TouchableOpacity onPress={onDetail}>
      <Text>{item?.name}</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
