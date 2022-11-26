import React from 'react';
import {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';

import {
  IMG_GRAY_HOME,
  IMG_GRAY_PROFILE,
  IMG_GREEN_PROFILE,
  IMG_GREEN_HOME,
} from '../../assets/images';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import Back from '../../components/Back/Back';
import Task from '../../components/Task/Task';

const taskList = [
  {title: 'Học bài', from: '5:00', to: '7:30'},
  {title: 'Học bài', from: '5:00', to: '7:30'},
  {title: 'Học bài', from: '5:00', to: '7:30'},
  {title: 'Học bài', from: '5:00', to: '7:30'},
  {title: 'Học bài', from: '5:00', to: '7:30'},
  {title: 'Học bài', from: '5:00', to: '7:30'},
  {title: 'Học bài', from: '5:00', to: '7:30'},
];

const Home = props => {
  const navigation = props.navigation;

  const navigateToUserPage = () => {
    navigation.navigate('User');
  };

  return (
    <View style={styles.backGround}>
      <ScrollView>
        <Back navigation={props.navigation} style={styles.back} />

        <View style={styles.Time}>
          <Text style={styles.TextFrame}>November</Text>
        </View>

        <View style={styles.tasksTime}>
          {taskList.map(({title, from, to}, index) => (
            <Task title={title} from={from} to={to} isActive={index === 0} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.Menu}>
        <Image source={IMG_GRAY_HOME} />
        <TouchableOpacity onPress={navigateToUserPage}>
          <Image source={IMG_GREEN_PROFILE} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  backGround: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'relative',
  },
  Time: {
    width: 166,
    height: 46,
    // marginLeft: 51,
    alignSelf: 'flex-end',
    marginTop: -35,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 36,
    marginRight: 10,
    marginLeft: 200,
    backgroundColor: COLORS.RIPE_LEMON,
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
  Menu: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 79,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.GALLERY,
    alignContent: 'center',
    // marginTop: 690,
    justifyContent: 'center',
  },
  tasksTime: {
    width: Dimensions.get('window').width,
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
});
export default Home;
