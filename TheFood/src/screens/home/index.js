import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

import Header from './header'
import Title from './title'
import Search from './search'
import Slider from './slider'
import Footer from './footer'
import styles from './styles'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        {/* Header Section */}
        <View style = {styles.header}>
          <Header/>
        </View>

        {/* Title Section */}
        <View style={styles.title}>
          <Title/>
        </View>

        {/* Seach Section */}
        <View style={styles.search}>
          <Search/>
        </View>

        {/* Slider Section */}
        <View style={styles.slider}>
          <Slider/>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Footer/>
        </View>
      </View>
    )
  }
}




