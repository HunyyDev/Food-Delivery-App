import React from "react";
import {
  ScrollView,
} from "react-native";
import CustomDish from "./CustomDish";
import { IMG_dish1 } from "../assets/images/images";
import { IMG_dish2 } from "../assets/images/images";

// Usage: <MenuScroll style={{style}}/>
const MenuScroll = props => {
  return(
      <ScrollView style={props.style} horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingVertical:5, paddingHorizontal:15}}>
          <CustomDish source={IMG_dish2} name={'Veggie\ntomato mix'} cost='N1,900'/>
          <CustomDish source={IMG_dish1} name={'Veggie\ntomato mix'} cost='N1,900'/>
          <CustomDish source={IMG_dish2} name={'Spicy fish\nsauce'} cost='N2,300.99'/>
      </ScrollView>
  );
};

export default MenuScroll;