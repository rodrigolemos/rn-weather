import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Forecast({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>
      <Ionicons
        name="rainy-outline"
        color="#1ec9ff"
        size={25}
      />
      <View style={styles.temp}>
        <Text style={styles.min}>{data.min}º</Text>
        <Text style={styles.max}>{data.max}º</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 12,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  date: {
    fontSize: 14
  },
  min: {},
  max: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  temp: {
    alignItems: 'center'
  }
})