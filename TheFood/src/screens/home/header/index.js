import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import {ICCart, ICMenu} from '../../../assets/icons'
import styles from './styles'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.icmenuContainer}>
            <ICMenu style={styles.icmenuContainer.icmenu}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iccarttyreContainer}>
            <View style={styles.iccarttyreContainer.iccarttyre}>
                <ICCart/>
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}



