import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import scale from '../../../../../responsive';
import CUSTOM_COLOR from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Custom_ButtonOne from '../../../../components/Custom_ButtonOne';

const PopUp = (props) => {
  const [showModal, setShowModal] = useState(props.visible);
  return (
    <Modal transparent visible={props.visible}>
      <View style={styles.background}>
        <View style={styles.noticeBox}>
          {/*Notice title */}
          <View style={styles.noticeTitle}>
            <Text style={styles.titleText}>Please note</Text>
          </View>
          {/*Mainland part*/}
          <Text style={styles.mainlandText}>DELIVERY TO MAINLAND</Text>
          <Text style={styles.mainlandCost}> N1000 - N2000</Text>
          <View style={styles.line} />
          {/*Island part*/}
          <Text style={styles.islandText}>DELIVERY TO ISLAND</Text>
          <Text style={styles.islandCost}> N2000 - N3000</Text>
          <Custom_ButtonOne
            text="Process"
            color={CUSTOM_COLOR.Vermilion}
            textColor={CUSTOM_COLOR.White}
            style={styles.buttonProcess}
            textStyle={styles.processText}
          />
          <Custom_ButtonOne
            text="Cancel"
            color={'transparent'}
            textColor={CUSTOM_COLOR.Black}
            style={styles.buttonCancel}
            textStyle={styles.cancelText}
            onPress={props.clickCancel}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noticeBox: {
    width: scale(315),
    height: scale(322),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 30,
    overflow: 'hidden',
  },
  noticeTitle: {
    backgroundColor: CUSTOM_COLOR.Gallery,
    width: scale(315),
    height: scale(66),
    position: 'absolute',
  },
  titleText: {
    color: CUSTOM_COLOR.Black,
    top: scale(17),
    left: scale(46),
    fontFamily: FONT_FAMILY.Poppins,
    fontSize: scale(20),
  },
  mainlandText: {
    position: 'absolute',
    left: scale(46),
    top: scale(84),
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
    fontSize: scale(14),
    fontFamily: FONT_FAMILY.Poppins,
  },
  islandText: {
    position: 'absolute',
    left: scale(46),
    top: scale(164),
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
    fontSize: scale(14),
    fontFamily: FONT_FAMILY.Poppins,
  },
  mainlandCost: {
    position: 'absolute',
    left: scale(41),
    top: scale(104),
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Poppins,
  },
  islandCost: {
    position: 'absolute',
    left: scale(41),
    top: scale(185),
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Poppins,
  },
  line: {
    position: 'absolute',
    width: scale(240),
    height: scale(1),
    left: scale(45),
    top: scale(147),
    backgroundColor: CUSTOM_COLOR.Black,
    opacity: 0.5,
  },
  buttonProcess: {
    top: scale(245),
    left: scale(138),
    width: scale(159),
    height: scale(60),
  },
  processText:{
    fontFamily: FONT_FAMILY.Poppins,
    fontSize: scale(17),
  },
  buttonCancel: {
    top: scale(245),
    left: scale(20),
    width: scale(100),
    height: scale(60),
  },
  cancelText:{
    fontFamily: FONT_FAMILY.Poppins,
    fontSize: scale(17),
    opacity: 0.5,
  }
});
