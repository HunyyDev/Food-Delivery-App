import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICOnBack} from '../../assets/icons';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';
import CustomButton from '../../components/CustomButton';
import {ImageBackground} from 'react-native-web';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const ProfileScreen = props => {
  var radio_props = [
    {label: 'Card', value: 1},
    {label: 'Bank account', value: 0},
    {label: 'Paypal', value: 0},
  ];

  const {navigation} = props;

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CustomBreadcrumbNavigation title="My Profile" onBack={onBack} />
      <View style={styles.information}>
        <Text style={styles.information.text}>Information</Text>
        <View style={styles.information.profile}>
          <Image
            style={styles.information.profile.avatar}
            source={require('../../assets/images/ProfileInfomationAvatar.png')}
          />
          <View style={styles.information.profile.info}>
            <Text style={styles.information.profile.info.name}>
              Marvis Ighedosa
            </Text>
            <Text style={styles.information.profile.info.email}>
              dosamarvis@gmail.com
            </Text>
            <Text style={styles.information.profile.info.bio}>
              No 15 street off ovie palace road effurun delta state
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.paymentMethod}>
        <Text style={styles.paymentMethod.text}>Payment Method</Text>
        <View>
          <View>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              buttonColor={CUSTOM_COLOR.VERMILION}
              buttonSize={10}
              buttonOuterSize={20}
              selectedButtonColor={CUSTOM_COLOR.VERMILION}
              // labelColor={'#50C900'}
              onPress={() => {}}
            />
          </View>
          <TouchableOpacity>
            <Text>Bank account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Paypal</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomButton type="secondary" title="Update" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: scaleY(60),
    backgroundColor: CUSTOM_COLOR.ATHENS_GRAY,
  },
  information: {
    width: normalize(300),
    alignSelf: 'center',
    text: {
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(20),
      marginTop: scaleY(60),
      marginBottom: scaleY(10),
    },
    profile: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: scaleY(16),
      paddingTop: scaleY(20),
      paddingBottom: scaleY(30),
      backgroundColor: CUSTOM_COLOR.VERMILION,
      borderRadius: normalize(20),
      info: {
        width: scaleX(190),
        marginLeft: scaleX(15),
        height: scaleY(100),
        justifyContent: 'space-between',
        name: {
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(20),
        },
        email: {
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(15),
          opacity: 0.5,
        },
        bio: {
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(15),
          opacity: 0.5,
        },
      },
    },
  },
  paymentMethod: {
    width: normalize(300),
    alignSelf: 'center',
    text: {
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(20),
    },
  },
  radioButton: {
    width: '20%',
  },
});

export default ProfileScreen;
