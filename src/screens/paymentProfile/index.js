import {Text, View, SafeAreaView, Image, Pressable} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {IMG_IDPicture} from '../../assets/images';
import styles from './styles';
import Option from '../../components/OptionList';
import OPTION_NAME from '../../constants/optionName';
import BackButton from '../../components/BackButton';

const PaymentProfileScreen = props => {
  const {navigation} = props;
  const [option, setOption] = useState();
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <>
        <View style={styles.headerContainer}>
          <BackButton style={styles.backButton} onPress={onBack} />
          <Text style={styles.header}>{'My profile'}</Text>
        </View>
      </>
      <>
        <Text style={styles.header}>{'Information'}</Text>
        <View style={styles.infoContainer}>
          <Image source={IMG_IDPicture} style={styles.profilePic} />
          <View style={styles.infoBox}>
            <Text style={styles.nameInfo}>{'Marvis Ighedosa'}</Text>
            <Text style={styles.info}>{'dosamarvis@gmail.com'}</Text>
            <Text style={styles.info}>
              {'No 15 uti street off ovie palace road effurun delta state'}
            </Text>
          </View>
        </View>
      </>
      <>
        <Text style={styles.header}>{'Payment Method'}</Text>
        <View style={styles.optionContainer}>
          <Option
            onPress={() => setOption(OPTION_NAME.Card)}
            isChoosing={option === OPTION_NAME.Card}>
            Card
          </Option>
          <Option
            onPress={() => setOption(OPTION_NAME.BankAccount)}
            isChoosing={option === OPTION_NAME.BankAccount}>
            BankAccount
          </Option>
          <Option
            onPress={() => setOption(OPTION_NAME.PayPal)}
            isChoosing={option === OPTION_NAME.PayPal}>
            PayPal
          </Option>
        </View>
      </>
      <View style={styles.buttonView}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default PaymentProfileScreen;
