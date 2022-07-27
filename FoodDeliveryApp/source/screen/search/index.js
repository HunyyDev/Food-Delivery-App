import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { IC_BigSearch } from '../../assets/icons'
import scale from '../../../responsive'
import CUSTOM_COLOR from '../../constants/color'
import Custom_InputText from './components/Custom_InputText'

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Search Box */}
      <>
      <Custom_InputText
          placeholderText={'Spicy chieckns'}
          placeholderColor={CUSTOM_COLOR.Black}
          style={styles.searchInput}
          hitSlop={{top: '100%', bottom: '100%', left: '100%', right: '100%'}}
        />
      </>
      {/* title hidden*/}
      <>
      <View style={styles.viewHidden}>
        <Text style={styles.textHidden}>Found 6 results</Text>
      </View>
      </>
      {/* icon Search */}
      <>
        <View style={styles.viewIcon}>
          <IC_BigSearch />
        </View>
      </>
      {/* title */}
      <>
        <Text style={styles.textContainer}>Item not found</Text>
      </>
      {/* descriptions */}
      <>
        <Text style={styles.descriptionsContainer}>{'Try searching the item with \na different keyword'} </Text>
      </>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Athens_Gray,
    },
    searchInput: {
        color: CUSTOM_COLOR.Black,
        top: scale(101),
        left: scale(72),
        position: 'absolute',
      },
    viewHidden: {
        position: 'absolute',
        backfaceVisibility: 'hidden',
        width: scale(270),
        height: scale(33),
        left: scale(72),
        top: scale(164),
    },
    textHidden: {
       
        fontWeight: '700',
        fontSize: scale(28),
        lineHeight: scale(33),
        textAlign: 'center',
        color: CUSTOM_COLOR.Black,
        opacity: 0
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
});