import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Task = ({title, from, to, isActive = false}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>
      {from} - {to}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#259E73',
    width: 300,
    borderRadius: 25,
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  text: {
    fontWeight: '400',
    fontSize: 20,
    color: 'white',
  },
});

export default Task;
