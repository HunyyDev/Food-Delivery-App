import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
import CustomButton from '../../components/CustomButton';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {IC_Forward} from '../../assets/icons';
import { IMG_Avatar } from '../../assets/images';

const Selection = props => {
  return (
    <TouchableOpacity style={styles.selection}>
      <View style={styles.content}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: scale(18), fontFamily: FONT_FAMILY.Bold}}>
            {props.text}
          </Text>
        </View>
        <Image source={IC_Forward} />
      </View>
    </TouchableOpacity>
  );
};

const MyProfileScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
<<<<<<< HEAD
          <CustomHeaderGoBack leftOnPress={() => props.navigation.goBack()} rightIcon={IC_Heart}/>
=======
          <CustomHeaderGoBack leftOnPress={() => props.navigation.goBack()} />
>>>>>>> 90518c2a0fc3ae70636c2eafca18b8407cdd2cf1
        </View>

        <View style={styles.main}>
          <View style={styles.title}>
            <Text style={{fontSize: scale(34), fontFamily: FONT_FAMILY.Light}}>
              {'My Profile'}
            </Text>
          </View>

          <View style={styles.detail}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: scale(18),
                  fontFamily: FONT_FAMILY.Bold,
                  flex: 1,
                }}>
                {'Personal details'}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{color: CUSTOM_COLOR.Vermilion, fontSize: scale(15)}}>
                  {'change'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detail.personalCard}>
              <View style={styles.detail.personalCard.avatar}>
                <Image source={IMG_Avatar} style={{alignSelf:'center', marginTop: scale(16)}}/>
              </View>
              <View style={styles.detail.personalCard.info}>
                <Text>

                </Text>
              </View>
            </View>
          </View>

          <View style={styles.choices}>
            <Selection text="Orders" />
            <Selection text="Pending Reviews" />
            <Selection text="Faq" />
            <Selection text="Help" />
          </View>
        </View>

        <View style={styles.button}>
          <CustomButton type="secondary" text="Update" />
        </View>
      </View>
    </View>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: CUSTOM_COLOR.SilverWhite,
  },

  subContainer: {
    flex: 1,
    width: '80%',
    // backgroundColor:'pink',
  },

  header: {
    flex: 1,
    // backgroundColor:'blue',
  },

  main: {
    flex: 8,
  },

  title: {
    flex: 1,
    justifyContent: 'center',
  },

  detail: {
    flex: 4,
    justifyContent: 'flex-end',
    personalCard: {
      height: '85%',
      backgroundColor: CUSTOM_COLOR.White,
      borderRadius: scale(20),
<<<<<<< HEAD
      flexDirection:'row',
=======
      flexDirection: 'row',
>>>>>>> 90518c2a0fc3ae70636c2eafca18b8407cdd2cf1
      avatar: {
        flex: 1,
      },
      info: {
        flex: 2,
<<<<<<< HEAD

=======
        backgroundColor: 'purple',
>>>>>>> 90518c2a0fc3ae70636c2eafca18b8407cdd2cf1
      },
    },
  },

  choices: {
    flex: 5,
    justifyContent: 'space-evenly',
  },

  selection: {
    height: '20%',
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(20),
    alignItems: 'center',
  },

  content: {
    flex: 1,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    flex: 1,
    bottom: 15,
  },
});
