import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {IC_BigSearch} from '../../assets/icons';
import scale from '../../../responsive';
import CUSTOM_COLOR from '../../constants/color';
import Custom_InputText from './components/Custom_InputText';
import Custom_FoodFlatList from './components/Custom_FoodFlatList';
import {IC_GoBack} from '../../assets/icons';

const SearchScreen = ({navigation: {goBack}, route}) => {
  const [count, setCount] = useState(1);
  console.log(count);
  const {searchKey} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      {/* Go back button */}
      <>
        <View style={styles.goBackContainer}>
          <TouchableOpacity hitSlop={styles.hitSlop} onPress={() => goBack()}>
            <IC_GoBack />
          </TouchableOpacity>
        </View>
      </>
      {/* Search Box */}
      <>
        <Custom_InputText
          placeholderText={'Search...'}
          placeholderColor={CUSTOM_COLOR.Silver}
          style={styles.searchInput}
          hitSlop={{
            top: '100%',
            bottom: '100%',
            left: '100%',
            right: '100%',
          }}
          searchKey={searchKey} />
      </>
      {/*Screen in case 0 item*/}
      <>
        {count === 0 ? (
          <>
            <View style={styles.viewIcon}>
              <IC_BigSearch />
            </View>
            <Text style={styles.textContainer}>Item not found {count}</Text>
            <Text style={styles.descriptionsContainer}>
              {'Try searching the item with \na different keyword'}{' '}
            </Text>
          </>
        ) : null}
      </>
      {/*Screen in case has items*/}
      <>
        {count !== 0 ? (
          <View style={styles.foodBox}>
            <View style={styles.viewHidden}>
              <Text style={styles.textHidden}>Found {count} results</Text>
            </View>
            <Custom_FoodFlatList countFoodNum={setCount} />
          </View>
        ) : (
          <Custom_FoodFlatList countFoodNum={setCount} />
        )}
      </>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Athens_Gray,
  },
  searchInput: {
    color: CUSTOM_COLOR.Black,
    top: scale(42),
    left: scale(101),
    position: 'absolute',
    width: scale(200),
  },
  viewHidden: {
    position: 'absolute',
    left: scale(72),
    top: scale(35),
  },
  textHidden: {
    fontWeight: '700',
    fontSize: scale(28),
    color: CUSTOM_COLOR.Black,
  },
  viewIcon: {
    position: 'absolute',
    width: scale(122),
    height: scale(122),
    left: scale(131),
    top: scale(285),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CUSTOM_COLOR.Athens_Gray,
  },
  searchIcon: {
    position: 'absolute',
    left: '12.5%',
    right: '12.5%',
    top: '12.5%',
    bottom: '12.5%',
    borderWidth: scale(10),
    borderColor: '#C7C7C7',
  },
  textContainer: {
    textAlign: 'center',
    fontSize: scale(28),
    left: scale(107),
    top: scale(445),
    fontWeight: '600',
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
    lineHeight: scale(33),
  },
  descriptionsContainer: {
    textAlign: 'center',
    fontSize: scale(17),
    left: scale(98),
    top: scale(495),
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
    lineHeight: scale(20),
    opacity: 0.57,
  },
  foodBox: {
    top: scale(129),
    backgroundColor: CUSTOM_COLOR.White,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - scale(129),
    borderRadius: 30,
  },
  goBackContainer: {
    position: 'absolute',
    top: scale(61),
    left: scale(50),
  },
  hitSlop: {
    top: scale(10),
    left: scale(10),
    right: scale(10),
    bottom: scale(10),
  },
});
