import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';

class HeadingButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //   <View style={styles.headingIconContainer}>
      //     <Image source={this.props.ICsource} />
      //   </View>
      <View style={styles.headingButtonContainer}>
        <TouchableOpacity style={styles.headingButton}>
          <Image source={this.props.ICsource} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HeadingButton;

const styles = StyleSheet.create({
  headingButtonContainer: {
    width: 24,
    height: 24,
    backgroundColor: CUSTOM_COLOR.ConcreteSolid,
    // backgroundColor: 'Blue',
  },
  headingButton: {
    backgroundColor: CUSTOM_COLOR.ConcreteSolid,
  },
});
