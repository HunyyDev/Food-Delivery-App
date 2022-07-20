import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import MenuScroll from "../../components/MenuScroll";
import CUSTOM_COLOR from "../../constants/colors";
import ListButton from "../../components/ListButton";
import scaleWidth from "../../constants/responsive";


const HomeScreen = () => {
  const [classify, setClassify] = useState('Foods');
  return (
    <View style={{ flex: 1, backgroundColor: CUSTOM_COLOR.Concrete}}>
      {/* Đây là phần trên này */}
      <View style={{flex:0.5}}></View>
      <View style={{flex:0.5}}></View>
      <View style={{flex:0.5}}></View>
      {/* Đây là phần trên này */}


      {/* Phần của tôi này */}
      <ListButton
      style={styles.ListButton}
      values={['Foods', 'Drinks', 'Snacks', 'Sauce']}
      selectedValue={classify}
      setSelectedValue={setClassify}/>

      <TouchableOpacity style={styles.seemoreContainer}>
        <Text style={styles.seemoreButton}>
          see more
        </Text>
      </TouchableOpacity>

      <MenuScroll style={styles.MenuScroll}/>
      {/* Phần của tôi này */}


      {/* Đây là phần dưới này */}
      <View style={{flex:0.5}}></View>
      {/* Đây là phần dưới này */}

    </View>
  );
};

const styles = StyleSheet.create({
  seemoreButton: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    color: CUSTOM_COLOR.Vermillon,
    fontSize: scaleWidth(15),
  },
  seemoreContainer:{
    alignItems:'flex-end',
    marginRight: scaleWidth(41),
  },
  MenuScroll: {
    maxHeight: scaleWidth(350),
  },
  ListButton: {
    maxHeight: scaleWidth(40), 
    marginBottom: scaleWidth(39),
  }
});

export default HomeScreen;