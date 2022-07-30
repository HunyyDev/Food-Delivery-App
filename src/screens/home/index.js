import React, {useMemo, useState} from 'react';
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
import {
  IC_House,
  IC_Vector,
  IC_ShoppingCart,
  IC_Search,
  IC_Heart,
  IC_User,
  IC_Refresh,
} from '../../assets/icons';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_FoodImage} from '../../assets/images';
import UnderlineButton from '../../components/UnderlineButton';
import TAB_NAME from '../../constants/tabName';
import SCREEN_NAME from '../../constants/screens';
const HomeScreen = props => {
  const categoryList = useMemo(
    () => ['Foods', 'Drinks', 'Snacks', 'Sauce'],
    [],
  );
  const {navigation} = props;
  const [tab, setTab] = useState(categoryList[0]);
  const onTransitToCart = () => {
    navigation.navigate(SCREEN_NAME.CART);
  };
  const onTrainsitToPaymentProfile = () => {
    navigation.navigate(SCREEN_NAME.PAYMENT_PROFILE);
  };
  return (
    // Background
    <SafeAreaView edges={['top', 'bottom']}>
      <ScrollView style={styles.backgroundContainer}>
        <View style={styles.navigatorContainer}>
          {/* Bar */}
          <TouchableOpacity>
            <Image source={IC_Vector} resizeMode={'contain'} />
          </TouchableOpacity>
          {/* ShoppingCart */}
          <TouchableOpacity onPress={onTransitToCart}>
            <Image source={IC_ShoppingCart} resizeMode={'contain'} />
          </TouchableOpacity>
        </View>

        {/* FoodText */}
        <View style={styles.foodTextContainer}>
          <Text style={styles.foodText}>Delicious food for you</Text>
        </View>
        {/* Rectangle */}
        <View style={styles.rectangleContainer}>
          <Image
            source={IC_Search}
            style={styles.searchIcon}
            resizeMode={'contain'}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={CUSTOM_COLOR.Black}
            style={styles.inputSearchText}
          />
        </View>
        {/*ScrollTab*/}
        <ScrollView horizontal style={styles.ScrollTab}>
          <UnderlineButton
            onPress={() => setTab(categoryList[0])}
            isChoosing={tab === categoryList[0]}>
            Foods
          </UnderlineButton>
          <UnderlineButton
            onPress={() => setTab(categoryList[1])}
            isChoosing={tab === categoryList[1]}>
            Drinks
          </UnderlineButton>
          <UnderlineButton
            onPress={() => setTab(categoryList[2])}
            isChoosing={tab === categoryList[2]}>
            Snacks
          </UnderlineButton>
          <UnderlineButton
            onPress={() => setTab(categoryList[3])}
            isChoosing={tab === categoryList[3]}>
            Sauce
          </UnderlineButton>
        </ScrollView>
        {/* ScrollView */}
        <ScrollView horizontal style={styles.ScrollViewStyle}>
          <View style={styles.scrollViewBox}>
            <View style={styles.foodImageContainer}>
              <Image
                source={IMG_FoodImage}
                style={styles.foodImageStyle}
                resizeMode={'contain'}
              />
            </View>
            <Text style={styles.foodName}>Veggie tomato mix</Text>
            <Text style={styles.foodPrice}>N1,900</Text>
          </View>
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
        </ScrollView>
      </ScrollView>
      <>
        <View style={styles.iconSection}>
          <TouchableOpacity>
            <Image source={IC_House} resizeMode={'center'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IC_Heart} resizeMode={'center'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onTrainsitToPaymentProfile}>
            <Image source={IC_User} resizeMode={'center'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IC_Refresh} opacity={0.3} resizeMode={'center'} />
          </TouchableOpacity>
        </View>
      </>
    </SafeAreaView>
  );
};

export default HomeScreen;
