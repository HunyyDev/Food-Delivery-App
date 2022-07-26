import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {IC_BackButton} from '../../assets/icons';
import {IMG_IDPicture} from '../../assets/images';
import OptionButton from './components/OptionButton';
import Custom_Button from '../../components/CustomButton';
import styles from './styles';
const ProfileScreen = props => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Image
          source={IC_BackButton}
          style={styles.backButton}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.textMyProfileContainer}>
        <Text style={styles.textMyProfile}>My Profile</Text>
      </View>
      <View style={styles.textPersonalDetailsContainer}>
        <Text style={styles.textPersonalDetail}>Personal details</Text>
        <Text style={styles.textChange}>Change</Text>
      </View>
      <View style={styles.idContainer}>
        <Image
          source={IMG_IDPicture}
          style={styles.idPicture}
          resizeMode="contain"
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Marvis Ighedosa</Text>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.detailsText}>Dosamarvis@gmail.com</Text>
        </View>
        <View style={styles.phoneNumberContainer}>
          <Text style={styles.detailsText}>+234 9011039271</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.detailsText}>
            No 15 uti street off ovie palace road effurun delta state
          </Text>
        </View>
      </View>
      <View style={styles.optionButton}>
        <OptionButton label="Orders" />
      </View>
      <View style={styles.optionButton}>
        <OptionButton label="Pending Reviews" />
      </View>
      <View style={styles.optionButton}>
        <OptionButton label="Faq" />
      </View>
      <View style={styles.optionButton}>
        <OptionButton label="Help" />
      </View>
      <View style={styles.updateButtonContainer}>
        <Custom_Button type="secondary">Update</Custom_Button>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
