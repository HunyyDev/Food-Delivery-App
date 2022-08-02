import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICCard, ICBankAccount, ICPaypal} from '../../assets/icons';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';
import CustomButton from '../../components/CustomButton';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const ProfileScreen = props => {
  var radio_props = [
    {id: 0, label: 'Card', value: 0},
    {id: 1, label: 'Bank account', value: 0},
    {id: 2, label: 'Paypal', value: 0},
  ];

  const {navigation} = props;

  const onBack = () => {
    navigation.goBack();
  };
  var check = 0;
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
        <View style={styles.paymentMethod.cards}>
          <RadioForm animation={true} style={styles.paymentMethod.cards.card}>
            {radio_props.map((obj, i) => (
              <React.Fragment>
                <RadioButton labelHorizontal={true} key={obj.id}>
                  <RadioButtonInput
                    obj={obj}
                    index={obj.id}
                    isSelected={{}}
                    borderWidth={2}
                    initial={0}
                    buttonSize={normalize(15)}
                    buttonOuterSize={normalize(25)}
                    buttonColor={CUSTOM_COLOR.VERMILION}
                    buttonInnerColor={CUSTOM_COLOR.VERMILION}
                    buttonOuterColor={CUSTOM_COLOR.VERMILION}
                    selectedButtonColor={CUSTOM_COLOR.VERMILION}
                    buttonWrapStyle={{
                      marginLeft: scaleX(20),
                      marginTop: scaleY(20),
                    }}
                    onPress={() => {}}
                  />
                  <View style={styles.icon} key={i}>
                    {obj.id === 0 ? (
                      <View style={styles.icon.iconCard}>
                        <ICCard></ICCard>
                      </View>
                    ) : obj.id === 1 ? (
                      <View style={styles.icon.iconBank}>
                        <ICBankAccount></ICBankAccount>
                      </View>
                    ) : (
                      <View style={styles.icon.iconPaypal}>
                        <ICPaypal></ICPaypal>
                      </View>
                    )}
                  </View>
                  <RadioButtonLabel
                    obj={obj}
                    index={obj.id}
                    labelHorizontal={true}
                    labelStyle={{
                      fontSize: normalize(17),
                      marginTop: scaleY(15),
                      paddingBottom: scaleY(25),
                      color: CUSTOM_COLOR.BLACK,
                      paddingLeft: scaleY(20),
                    }}
                  />
                </RadioButton>
                <View
                  // key={obj.id}
                  style={{
                    borderBottomWidth: obj.id !== 2 ? 1 : 0,
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                    width: scaleX(200),
                    alignSelf: 'center',
                  }}></View>
              </React.Fragment>
            ))}
          </RadioForm>
        </View>
      </View>
      <View style={styles.btnUpdate}>
        <CustomButton type="secondary" title="Update" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: scaleY(60),
    backgroundColor: CUSTOM_COLOR.ATHENS_GRAY,
    position: 'relative',
  },
  information: {
    width: normalize(300),
    alignSelf: 'center',
    text: {
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(20),
      marginTop: scaleY(60),
      marginBottom: scaleY(20),
    },
    profile: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: scaleY(16),
      paddingTop: scaleY(20),
      paddingBottom: scaleY(30),
      backgroundColor: CUSTOM_COLOR.WHITE,
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
    marginTop: scaleY(48),
    text: {
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(20),
      marginBottom: scaleY(20),
    },
    cards: {
      paddingHorizontal: scaleY(16),
      paddingTop: scaleY(20),
      paddingBottom: scaleY(30),
      backgroundColor: CUSTOM_COLOR.WHITE,
      borderRadius: normalize(20),
      card: {
        height: scaleY(200),
        justifyContent: 'space-between',
      },
    },
  },
  icon: {
    marginTop: scaleY(10),
    marginLeft: scaleX(15),
    iconCard: {
      width: normalize(40),
      height: normalize(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: CUSTOM_COLOR.TAHITI_GOLD,
      borderRadius: normalize(10),
    },
    iconBank: {
      width: normalize(40),
      height: normalize(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: CUSTOM_COLOR.FRENCH_ROSE,
      borderRadius: normalize(10),
    },
    iconPaypal: {
      width: normalize(40),
      height: normalize(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: CUSTOM_COLOR.BLUE_RIBBON,
      borderRadius: normalize(10),
    },
  },
  btnUpdate: {
    position: 'absolute',
    bottom: scaleY(36),
    alignSelf: 'center',
  },
});

export default ProfileScreen;
