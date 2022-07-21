/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  IMG_CART,
  IMG_SIDEBAR,
  IMG_SEARCH,
  IMG_HOME,
  IMG_USER,
  IMG_HISTORY,
  IMG_HEART,
} from '../../src/assets/icons';
import {IMG_Item} from '../../src/assets/images';
import styles from './styles';

import {SafeAreaView, View, ScrollView, Image, Text} from 'react-native';

// function scale(number) {
//   let scaleNumber;
//   const currentDeviceWidth = Dimensions.get('window').width;
//   scaleNumber = (number / Size.Device_Width) * currentDeviceWidth;
//   return scaleNumber;
// }

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <></>
      <View style={styles.SideBarAndCart}>
        <View style={styles.SideBarContainer}>
          <Image style={styles.SideBar} source={IMG_SIDEBAR} />
        </View>
        <View style={styles.Cart}>
          <Image style={styles.Cart} source={IMG_CART} />
        </View>
      </View>
      <></>
      <></>
      <View style={styles.TextTitleContainer}>
        <Text style={styles.TextTitle}>{'Delicious \nfood for you'}</Text>
      </View>
      <></>
      <View style={styles.SearchButtonContainer}>
        <Image style={styles.SearchButtonIcon} source={IMG_SEARCH} />
        <Text style={styles.SearchButtonText}>Seach</Text>
      </View>
      <></>
      <ScrollView style={styles.Scroll_View_Navigation} horizontal={true}>
        <View style={[styles.Scroll_View_Item]}>
          <Text style={[styles.NavigationText, styles.HightLightText]}>
            Foods
          </Text>
          <View
            style={[styles.Navigation_UnderLine, styles.HightLightLine]}></View>
        </View>
        <View style={styles.Scroll_View_Item}>
          <Text style={styles.NavigationText}>Drink</Text>
          <View style={styles.Navigation_UnderLine}></View>
        </View>
        <View style={styles.Scroll_View_Item}>
          <Text style={styles.NavigationText}>Sauce</Text>
          <View style={styles.Navigation_UnderLine}></View>
        </View>
        <View style={styles.Scroll_View_Item}>
          <Text style={styles.NavigationText}>Snacks</Text>
          <View style={styles.Navigation_UnderLine}></View>
        </View>
        <View style={styles.Scroll_View_Item}>
          <Text style={styles.NavigationText}>Other</Text>
          <View style={styles.Navigation_UnderLine}></View>
        </View>
      </ScrollView>
      <></>
      <Text style={styles.SeeMoreText}>see more</Text>
      <></>
      <View style={styles.Scroll_View}>
        <ScrollView style={styles.Scroll_View_Container} horizontal={true}>
          <View style={[styles.Item, styles.shadowProps]}>
            <View style={styles.Image_Container}>
              <Image style={styles.Image1} source={IMG_Item} />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.Text}>Veggie</Text>
              <Text style={styles.Text}>Tomato mix</Text>
            </View>
            <Text style={styles.Text2}>N1,900</Text>
          </View>

          <View style={styles.Item}>
            <View style={styles.Image_Container}>
              <Image style={styles.Image1} source={IMG_Item} />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.Text}>Veggie</Text>
              <Text style={styles.Text}>Tomato mix</Text>
            </View>
            <Text style={styles.Text2}>N1,900</Text>
          </View>

          <View style={styles.Item}>
            <View style={styles.Image_Container}>
              <Image style={styles.Image1} source={IMG_Item} />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.Text}>Veggie</Text>
              <Text style={styles.Text}>Tomato mix</Text>
            </View>
            <Text style={styles.Text2}>N1,900</Text>
          </View>

          <View style={styles.Item}>
            <View style={styles.Image_Container}>
              <Image style={styles.Image1} source={IMG_Item} />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.Text}>Veggie</Text>
              <Text style={styles.Text}>Tomato mix</Text>
            </View>
            <Text style={styles.Text2}>N1,900</Text>
          </View>

          <View style={styles.Item}>
            <View style={styles.Image_Container}>
              <Image style={styles.Image1} source={IMG_Item} />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.Text}>Veggie</Text>
              <Text style={styles.Text}>Tomato mix</Text>
            </View>
            <Text style={styles.Text2}>N1,900</Text>
          </View>
        </ScrollView>
      </View>

      <></>
      <View style={styles.NavigationBottomBar}>
        <Image style={styles.HomeStyle} source={IMG_HOME} />
        <Image style={styles.HeartStyle} source={IMG_HEART} />
        <Image style={styles.UserStyle} source={IMG_USER} />
        <Image style={styles.HistoryStyle} source={IMG_HISTORY} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

