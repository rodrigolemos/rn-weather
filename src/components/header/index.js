import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <LinearGradient
      style={styles.header}
      colors={['#1ed6ff', '#97c1ff']}
    >
      <Text style={styles.date}>13/03/2021</Text>
      <Text style={styles.city}>Arujá</Text>
      <Ionicons
        name="cloud"
        color="#fff"
        size={150}
      />
      <Text style={styles.temperature}>30º</Text>
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