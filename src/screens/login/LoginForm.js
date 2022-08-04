import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';
import {CustomInput} from '../../assets/components/CustomInput';

export class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.backgroundContainer}>
          <>{/*Info and forgot password*/}</>
          <ScrollView>
            <View style={styles.In4Container}>
              <CustomInput label={'E-mail address:'} />
              <CustomInput label={'Password: '} secureTextEntry={true} />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('WaitingForUpgrade')
                }>
                <Text style={styles.forgotPassword}>Forgot password</Text>
              </TouchableOpacity>
            </View>
            <>{/*Button Selection*/}</>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CustomDrawer')}
              style={styles.buttonSelection}>
              <Text style={styles.SelectionText}>{'Login'}</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  In4Container: {
    marginTop: scale(20),
    marginLeft: scale(50),
    height: scale(300),
    marginEnd: scale(50),
    justifyContent: 'space-around',
  },
  forgotPassword: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFBlack,
    alignContent: 'flex-start',
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFBlack,
    alignSelf: 'center',
  },
  buttonSelection: {
    width: scale(314),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    marginTop: scale(41),
    alignSelf: 'center',
  },
});
