import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import COLOR from '../../constants/colors';
import ListButton from '../../components/ListButton';
import scale from '../../constants/responsive';
import CustomDish from '../../components/CustomDish';
import { DrawnerContext } from '../../components/CustomDrawer';
import Screens from '../../constants/screen';

import {
  ICON_menu,
  ICON_search,
  ICON_cart,
  ICON_heart,
  ICON_user,
  ICON_home,
  ICON_history,
} from '../../assets/icons/icons'
import {
  IMG_dish1,
  IMG_dish2,
} from '../../assets/images/images';
import font_family from '../../constants/fonts';
import dataDish from '../../data/dish';
import ButtonTab from './ButtonTab';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {
  const [classify, setClassify] = useState('Foods');
  const {setStatus} = useContext(DrawnerContext);
  const openDrawer = () => {
    setStatus(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Heading */}
      <>
        {/* Tab bar */}
        <>
          <View style={styles.TabBar}>
            <TouchableOpacity activeOpacity={0.6}
            onPress={()=>openDrawer()}>
              <Image style={styles.Menu} source={ICON_menu} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <Image
                style={styles.ShoppingCart}
                source={ICON_cart}></Image>
            </TouchableOpacity>
          </View>
        </>
      </>
      <ScrollView style={styles.option} showsVerticalScrollIndicator={false}>
        <>
          {/* Title */}
          <>
            <View style={styles.containerText}>
              <Text style={styles.Content}>Delicious food for you</Text>
            </View>
          </>

          {/* Search */}
          <>
          <TouchableOpacity onPress={()=>props.navigation.navigate(Screens.SEARCH, {navigation: props.navigation})}>
            <View style={styles.Search} pointerEvents='none'>
              <Image style={styles.SearchLogo} source={ICON_search}></Image>
              <TextInput
                style={styles.SearchText}
                placeholder={'Search'}/>
            </View>
            </TouchableOpacity>
          </>
        </>
        {/* God */}
        <>
          <ListButton
            style={styles.ListButton}
            values={['Foods', 'Drinks', 'Snacks', 'Sauce']}
            selectedValue={classify}
            setSelectedValue={value => setClassify(value)}
          />

          <TouchableOpacity style={styles.seemoreContainer}>
            <Text style={styles.seemoreButton}>see more</Text>
          </TouchableOpacity>

          <ScrollView
            style={styles.MenuScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: scale.scaleWidth(5),
              paddingHorizontal: scale.scaleWidth(15),
            }}>
              {
                dataDish.map((item, index)=>(
                    <CustomDish
                      key={index}
                      source={item.source}
                      name={item.name}
                      cost={item.cost}
                      navigation={props.navigation}/>
                  
                ))
              }
          </ScrollView>
        </>
      </ScrollView>
      {/* Bottom */}
      <>
        <View style={styles.BottomContainer}>
          <View style={styles.BottomContainer}>
            <ButtonTab icon={ICON_home}
            navigation={props.navigation}
            screen={Screens.HOME}/>
            <ButtonTab icon={ICON_heart}
            navigation={props.navigation}
            screen={Screens.HOME}/>
            <ButtonTab icon={ICON_user}
            navigation={props.navigation}
            screen={Screens.PROFILE}/>
            <ButtonTab icon={ICON_history}
            navigation={props.navigation}
            screen={Screens.HOME}/>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.concrete,
  },
  TabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: scale.scaleWidth(64),
    marginBottom: scale.scaleWidth(30),
  },
  Menu: {
    marginLeft: scale.scaleWidth(54.6),
  },
  ShoppingCart: {
    marginRight: scale.scaleWidth(41),
  },
  containerText: {
    width: 190,
    height: 82,
    marginLeft: scale.scaleWidth(50),
    marginTop: scale.scaleWidth(19.33),
  },
  Content: {
    fontSize: 34,
    lineHeight: 40.57,
    fontFamily: font_family.sfProRounded.bold,
    color: COLOR.black,
  },
  Search: {
    borderRadius: scale.scaleWidth(30),
    marginTop: scale.scaleWidth(26),
    width: scale.scaleWidth(314),
    height: scale.scaleWidth(60),
    backgroundColor: COLOR.gallery,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  SearchLogo: {
    marginLeft: scale.scaleWidth(35),
  },
  SearchText: {
    marginLeft: scale.scaleWidth(16),
    fontSize: 17,
    fontFamily: font_family.sfProRounded.regular,
    color: COLOR.black,
  },
  BottomContainer: {
    height: 60,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  seemoreButton: {
    fontFamily: font_family.sfProRounded.regular,
    color: COLOR.vermilion,
    fontSize: scale.scaleWidth(15),
  },
  seemoreContainer: {
    alignItems: 'flex-end',
    marginRight: scale.scaleWidth(41),
    marginTop: scale.scaleWidth(43),
  },
  MenuScroll: {
    height: 355,
    maxHeight: scale.scaleWidth(355),
    marginTop: scale.scaleWidth(1),
  },
  ListButton: {
    height: scale.scaleWidth(46),
    maxHeight: scale.scaleWidth(46),
    marginTop: scale.scaleWidth(32),
  },
});


/* <CustomDish
source={IMG_dish2}
name={'Veggie\ntomato mix'}
cost="N1,900"
navigation={props.navigation}
/>
<CustomDish
source={IMG_dish1}
name={'Veggie\ntomato mix'}
cost="N1,900"
navigation={props.navigation}
/>
<CustomDish
source={IMG_dish2}
name={'Spicy fish\nsauce'}
cost="N2,300.99"
navigation={props.navigation}
/> */