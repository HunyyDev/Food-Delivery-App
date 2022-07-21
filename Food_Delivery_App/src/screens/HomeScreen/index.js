import FONT_FAMILY from '../../constants/font';
import CUSTOM_COLORS from '../../constants/colors';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import {
  ICHeart,
  ICCart,
  ICMenu,
  ICHome,
  ICSearch,
  ICTime,
  ICUser,
} from '../../assets/icons';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.HeadWrapper}>
            <ICMenu style={styles.icon} />
            <ICCart style={styles.icon} />
          </View>
        </SafeAreaView>
        <View>
          <Text style={styles.TextStyle}>Delicious </Text>
          <Text style={styles.TextStyle}>food for you</Text>
        </View>

        <View>
          <View style={styles.Top}>
            <ICSearch style={styles.Searchbar} />
            <Text style={styles.Searchbar}>Search</Text>
          </View>
        </View>

        <SafeAreaView>
          <View style={styles.HeadWrapper}>
            <Text style={styles.TextMenu}> Foods </Text>
            <Text style={styles.TextMenu}> Drinks </Text>
            <Text style={styles.TextMenu}> Snacks </Text>
            <Text style={styles.TextMenu}> Sauces </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  icon: {
    width: 22,
    height: 15,
  },
  TextStyle: {
    fontSize: 34,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontStyle: FONT_FAMILY.Bold,
    fontColor: CUSTOM_COLORS.Black,
  },
  TextMenu: {
    fontSize: 20,
  },
  Searchbar: {
    flexDirection: 'row',
    paddingHorizontal: '20',
  },
});
