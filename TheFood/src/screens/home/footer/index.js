import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import styles from './styles'
import { ICHeart, ICHome, ICTime, ICUser, ICUser2 } from '../../../assets/icons'

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon}>
          <ICHome/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <ICHeart/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <ICUser/>
          <ICUser2/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <ICTime/>
        </TouchableOpacity>
      </View>
    )
  }
}
