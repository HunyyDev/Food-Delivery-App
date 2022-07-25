import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import {
  IC_Clock,
  IC_Heart,
  IC_Home,
  IC_More,
  IC_Search,
  IC_Shopping,
  IC_User,
} from '../assets/icons';
import scale from '../../responsive';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';
import CustomPicker from '../components/CustomPicker';

export default class HomeScreen extends Component {
  state = {
    pageSelect: 'Home',
  };
  setPageSelect = newPageSelect => {
    this.setState({
      pageSelect: newPageSelect,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Heading */}
        <View style={styles.headingContainer}>
          {/* Icon */}
          <View style={styles.topICBar}>
            <TouchableOpacity style={styles.icontouchContainer}>
              <IC_More />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.icontouchContainer,
                {alignItems: 'flex-end', opacity: 0.4},
              ]}>
              <IC_Shopping />
            </TouchableOpacity>
          </View>
          {/* Title */}
          <Text style={styles.titleText}> {'Delicious \n food for you'} </Text>
          {/* Search */}
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder={'Search'}></TextInput>
            <TouchableOpacity style={styles.searchTouch}>
              <IC_Search />
            </TouchableOpacity>
          </View>
        </View>
        {/* Body */}
        <View style={styles.bodyContainer}></View>
        {/* footContainer */}
        <View style={styles.footContainer}>
          <TouchableOpacity
            onPress={() => {
              this.setPageSelect('Home');
            }}
            //
          >
            {/* <CustomPicker label="Home" page={this.state.pageSelect} /> */}
            <IC_Home color={'yellow'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'pink'}}
            onPress={() => {
              this.setPageSelect('Like');
            }}>
            {/* <CustomPicker label="Like" page={this.state.pageSelect} /> */}
            {/* <IC_Heart color={'pink'} /> */}
          </TouchableOpacity>
          <TouchableOpacity>{/* <IC_User /> */}</TouchableOpacity>
          <TouchableOpacity>{/* <IC_Clock /> */}</TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: scale(54.6),
    //backgroundColor: 'pink',
  },
  headingContainer: {
    marginTop: 20,
    //backgroundColor: 'yellow',
    height: '40%',
  },
  topICBar: {
    position: 'absolute',
    //backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '25%',
    width: '100%',
    alignItems: 'center',
  },
  icontouchContainer: {
    //backgroundColor: '#9BD0E5',
    height: '100%',
    width: '30%',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(34),
    color: CUSTOM_COLOR.Black,
    marginTop: scale(132),
  },
  searchBox: {
    marginTop: 30,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
    fontSize: scale(20),
    borderRadius: scale(30),
    paddingLeft: scale(60),
  },
  searchTouch: {
    //backgroundColor: 'yellow',
    marginTop: -45,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: 40,
  },
  bodyContainer: {
    height: '50%',
    backgroundColor: 'pink',
    //marginTop: 20,
  },
  footContainer: {
    // marginTop: 50,
    height: '10%',
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
