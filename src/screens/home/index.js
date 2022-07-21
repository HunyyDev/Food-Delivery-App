import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import CUSTOM_COLOR from "../../constants/colors";
import ListButton from "../../components/ListButton";
import scaleWidth from "../../constants/responsive";
import CustomDish from "../../components/CustomDish";
import { IMG_dish1, IMG_dish2 } from "../../assets/images/images";



const HomeScreen = () => {
  const [classify, setClassify] = useState('Foods');
  return (
    <View style={{ flex: 1, backgroundColor: CUSTOM_COLOR.Concrete}}>
      {/* Đây là phần trên này */}
      <View style={{flex:0.5}}></View>
      <View style={{flex:0.5}}></View>
      <View style={{flex:0.5}}></View>
      {/* Đây là phần trên này */}


      {/* Phần của VH này */}
      <ListButton
      style={styles.ListButton}
      values={['Foods', 'Drinks', 'Snacks', 'Sauce']}
      selectedValue={classify}
      setSelectedValue={setClassify}/>

      <TouchableOpacity style={styles.seemoreContainer}>
        <Text style={styles.seemoreButton}>see more</Text>
      </TouchableOpacity>

      <ScrollView style={styles.MenuScroll} horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingVertical:scaleWidth(5), paddingHorizontal: scaleWidth(15)}}>
          <CustomDish source={IMG_dish2} name={'Veggie\ntomato mix'} cost='N1,900'/>
          <CustomDish source={IMG_dish1} name={'Veggie\ntomato mix'} cost='N1,900'/>
          <CustomDish source={IMG_dish2} name={'Spicy fish\nsauce'} cost='N2,300.99'/>
      </ScrollView>
      {/* Phần của VH này */}


      {/* Đây là phần dưới này */}
      <View style={{flex:0.5}}></View>
      {/* Đây là phần dưới này */}

    </View>
  );
};

const styles = StyleSheet.create({
  seemoreButton: {
    fontFamily: 'SF-Pro-Rounded-Regular',
    color: CUSTOM_COLOR.Vermilion,
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