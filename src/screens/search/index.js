import React, {useMemo, useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {IC_BackButton} from '../../assets/icons/index'
import {IMG_FoodImage, IMG_EggCucumber, IMG_FriedChicken, IMG_MoiMoi} from '../../assets/images/index'

const SearchTab = () => {
    return (
    <SafeAreaView style={styles.container} edges={['top','bottom']}>
    <>
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={IC_BackButton}/>
      </TouchableOpacity>
      <TextInput style={styles.input}/>
    </View>
    </>
    <>
    <View style={styles.resultContainer}>
      <Text style={styles.header}>{'Found 6 items'}</Text>
      <ScrollView style={styles.result}>
        <View style={styles.resultColumn}>
          <View style={styles.scrollViewBox}>
            <View style={styles.foodImageContainer}>
              <Image
                source={IMG_FoodImage}
                style={styles.foodImageStyle}
                resizeMode={'cover'}
              />
            </View>
            <Text style={styles.foodName}>Veggie tomato mix</Text>
            <Text style={styles.foodPrice}>N1,900</Text>
          </View>
        </View>
        <View style={styles.resultColumn}>

        </View>
      </ScrollView>
    </View>
    </>
    </SafeAreaView>
    );
};
export default SearchTab;
