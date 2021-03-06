import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ background, weather, icon }) {
  return (
    <LinearGradient
      style={styles.header}
      colors={background}
    >
      <Text style={styles.date}>{weather.results.date}</Text>
      <Text style={styles.city}>{weather.results.city_name}</Text>
      <Ionicons
        name={icon.name}
        color="#fff"
        size={150}
      />
      <Text style={styles.temperature}>{weather.results.temp}º</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '90%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  date: {
    color: '#fff',
    fontSize: 17
  },
  city: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  temperature: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold'
  },
})