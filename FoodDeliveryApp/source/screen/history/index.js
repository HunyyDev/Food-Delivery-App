import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import scale from '../../../responsive'
import CUSTOM_COLOR from '../../constants/color'
import { IC_Calender } from '../../assets/icons'
import Custom_ButtonOne from '../../components/Custom_ButtonOne'

const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* screen name */}
      <>
        <Text style={styles.screenName}>History</Text>
      </>
      {/* icon History */}
      <>
        <View style={styles.viewIcon}>
          <IC_Calender />
        </View>
      </>
      {/* title */}
      <>
        <Text style={styles.textContainer}>No history yet</Text>
      </>
      {/* descriptions */}
      <>
        <Text style={styles.descriptionsContainer}>{'Hit the orange button down \nbelow to Create an order'} </Text>
      </>
      {/* button */}
      <>
      <Custom_ButtonOne
            text="Start ordering"
            color={CUSTOM_COLOR.Vermilion}
            textColor={CUSTOM_COLOR.White}
          />
      </>
    </SafeAreaView>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Athens_Gray,
    },
    screenName: {
        textAlign: 'center',
        fontSize: scale(18),
        left: scale(175),
        top: scale(61),
        fontWeight: '600',
        color: CUSTOM_COLOR.Black,
        position: 'absolute',
        lineHeight: scale(21),
    },
    viewIcon: {
        position: 'absolute',
        width: scale(106.5),
        height: scale(118.33),
        left: scale(148),
        top: scale(272.92),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CUSTOM_COLOR.Athens_Gray,
    },
    textContainer: {
        textAlign: 'center',
        fontSize: scale(28),
        left: scale(111),
        top: scale(418),
        fontWeight: '600',
        color: CUSTOM_COLOR.Black,
        position: 'absolute',
        lineHeight: scale(33),
    },
    descriptionsContainer: { 
        textAlign: 'center',
        fontSize: scale(17),
        left: scale(97),
        top: scale(468),
        fontWeight: '400',
        color: CUSTOM_COLOR.Black,
        position: 'absolute',
        lineHeight: scale(20),
        opacity: 0.57,
    },

});