import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IMG_LOGOUT,
  IMG_LOGO_WHITE,
  IMG_NOT_CHOSEN_Home,
} from '../../assets/images';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const User = props => {
  const navigation = props.navigation;

  const onPress = props;
  const navigateToHomePage = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.backGround}>
      <ScrollView>
        <View style={styles.UserView}>
          <Image source={IMG_LOGO_WHITE} style={styles.logo}></Image>
          <View style={styles.InforText}>
            <Text style={styles.UserText}>User</Text>
            <Text style={styles.NoteText}>lorem isum</Text>
          </View>
        </View>

        <View style={styles.Contain}>
          <View style={styles.Choose}>
            <TouchableOpacity onPress={navigateToHomePage}>
              <Image
                source={IMG_NOT_CHOSEN_Home}
                style={{marginTop: 595}}></Image>
            </TouchableOpacity>
            <Image
              source={IMG_LOGOUT}
              style={{marginTop: 20, marginLeft: -6}}></Image>
          </View>
          <View style={styles.Borderne}>
            <ScrollView>
              <View style={styles.BorderChua}>
                <Text style={styles.Title}>The emission of CO2</Text>
                <View style={styles.SmallBorder}>
                  <Text style={styles.TextTo}>500</Text>
                  <Text style={styles.TextVua}>(g) CO2</Text>
                </View>
              </View>

              <View style={styles.BorderChua}>
                <Text style={styles.Title}>The accumulated points</Text>
                <View style={styles.SmallBorder}>
                  <Text style={styles.TextTo}>5000</Text>
                  <Text style={styles.TextVua}>POINTS</Text>
                </View>
              </View>

              <View style={styles.BorderChua}>
                <Text style={styles.Title}>Statistic</Text>
                <View style={styles.Statistic}>
                  <Text style={styles.TextTo}>5000</Text>
                  <Text style={styles.TextVua}>POINTS</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  backGround: {
    backgroundColor: COLORS.JUNGLE_GREEN,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  Contain: {
    width: Dimensions.get('window').width,
    height: 750,
    // marginLeft: 51,
    marginTop: 22,
    flex: 1,
    flexDirection: 'row',
  },
  TextFrame: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    color: COLORS.BLACK,
    marginBottom: 10,
    fontSize: 18,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',

    display: 'flex',
  },
  back: {
    width: 53,
    height: 53,
  },
  logo: {},
  InforText: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    color: COLORS.BLACK,
    marginBottom: 10,
    fontSize: 18,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    display: 'flex',
  },
  UserText: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_REGULAR,
    color: COLORS.WHITE,
    fontSize: 20.5,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
  },
  NoteText: {
    fontFamily: FONT_FAMILY.MONTSERRAT_LIGHT,
    color: COLORS.BLACK,
    marginBottom: 10,
    fontSize: 12,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  UserView: {
    flexDirection: 'row',
    width: 140,
    height: 75,
    marginTop: 46,
    marginLeft: 34,
  },
  Borderne: {
    width: 350,
    height: 900,
    backgroundColor: 'white',
    marginTop: 22,
    marginLeft: -30,
    borderRadius: 20,
  },
  Choose: {
    marginLeft: 20,
    width: 160,
    height: 750,
  },
  SmallBorder: {
    backgroundColor: COLORS.JUNGLE_GREEN,
    borderRadius: 20,
    width: 200,
  },
  BorderChua: {
    marginTop: 20,
    width: 200,
    marginLeft: 30,
  },
  TextTo: {
    fontFamily: FONT_FAMILY.MONTSERRAT_LIGHT,
    color: COLORS.WHITE,
    marginBottom: 10,
    fontSize: 34,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  TextVua: {
    fontFamily: FONT_FAMILY.MONTSERRAT_LIGHT,
    color: COLORS.WHITE,
    marginBottom: 10,
    fontSize: 12,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  TextNho: {
    fontFamily: FONT_FAMILY.MONTSERRAT_LIGHT,
    color: COLORS.BLACK,
    marginBottom: 10,
    fontSize: 12,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  TextNhoXanh: {
    fontFamily: FONT_FAMILY.MONTSERRAT_LIGHT,
    color: COLORS.BLACK,
    marginBottom: 10,
    fontSize: 12,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  Title: {
    fontFamily: FONT_FAMILY.SF_PRO_ROUNDED_REGULAR,
    color: COLORS.JUNGLE_GREEN,
    marginBottom: 10,
    fontSize: 20,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  Statistic: {
    marginTop: 20,
    width: 200,
    marginLeft: 30,
    backgroundColor: 'white',
  },
});
export default User;
