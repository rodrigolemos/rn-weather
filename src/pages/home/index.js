import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Menu from '../../components/menu';
import Header from '../../components/header';
import Conditions from '../../components/conditions';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%'
  }
})