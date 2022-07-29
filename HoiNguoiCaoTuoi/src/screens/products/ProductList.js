import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import SCREEN_NAME from '../../constants/screens';
import ProductItem from './components/ProductItem';

const dummyData = [
  {
    id: 1,
    name: 'Chocolate Cake',
  },

  {
    id: 2,
    name: 'Choco Mint',
  },
];

const ProductList = props => {
  const {navigation} = props;

  const onBack = () => {
    navigation.navigate(SCREEN_NAME.HOME);
  };

  const renderProductItem = ({item, index}) => {
    return <ProductItem data={item} />;
  };

  return (
    <SafeAreaView>
      <Text>ProductList</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
        <Text style={[styles.text, {color: 'red'}]}>{'On Back'}</Text>
      </TouchableOpacity>
      <FlatList
        data={dummyData}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
