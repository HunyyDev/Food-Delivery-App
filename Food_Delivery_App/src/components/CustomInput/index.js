import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import ICSearch from '../../assets/icons/ICSearch';

const CustomInput = () => {
  return (
    <View style={styles.Searchbar}>
      <View style={styles.inputContainer}>
        <ICSearch></ICSearch>
        <TextInput style={styles.TextInSearchBar} placeholder="Search" />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  Searchbar: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#EFEEEE',
    alignItems: 'center',
    paddingLeft: 20,
  },
  TextInSearchBar: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 40,
  },
});
