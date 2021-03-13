import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import Menu from '../../components/menu';
import Header from '../../components/header';
import Conditions from '../../components/conditions';
import Forecast from '../../components/forecast';

const forecast = [
  {
    "date": "13/03",
    "weekday": "Sáb",
    "max": 30,
    "min": 17,
    "description": "Ensolarado",
    "condition": "clear_day"
  },
  {
    "date": "14/03",
    "weekday": "Dom",
    "max": 30,
    "min": 18,
    "description": "Ensolarado",
    "condition": "clear_day"
  },
  {
    "date": "15/03",
    "weekday": "Seg",
    "max": 29,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "16/03",
    "weekday": "Ter",
    "max": 30,
    "min": 18,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "17/03",
    "weekday": "Qua",
    "max": 30,
    "min": 19,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 30,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 29,
    "min": 20,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 30,
    "min": 20,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "21/03",
    "weekday": "Dom",
    "max": 30,
    "min": 21,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "22/03",
    "weekday": "Seg",
    "max": 30,
    "min": 21,
    "description": "Tempo nublado",
    "condition": "cloud"
  }
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={forecast}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
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
  },
  list: {
    marginTop: 10
  }
})