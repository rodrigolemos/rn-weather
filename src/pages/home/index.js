import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as Location from 'expo-location';
import { api, key } from '../../services/api';
import { condition } from '../../utils/condition'

import Menu from '../../components/menu';
import Header from '../../components/header';
import Conditions from '../../components/conditions';
import Forecast from '../../components/forecast';

import { Container, List } from './styles';

export default function Home() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: 'cloud', color: '#fff' });
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

  useEffect(() => {
    
    (async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permissão negada para acessar localização');
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      const response = await api.get(
        `/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );

      setWeather(response.data);

      if (response.data.results.currently === 'noite') {
        setBackground(['#0c3741', '#0f2f61']);
      }

      setIcon(
        condition(response.data.results.condition_slug)
      );

      setLoading(false);
    })();

  }, []);

  if (loading) {
    return (
      <Container>
        <Text>Carregando...</Text>
      </Container>
    )
  }

  return (
    <Container>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <>
          <Menu />
          <Header
            background={background}
            weather={weather}
            icon={icon}
          />
          <Conditions
            weather={weather}
          />
          <List
            horizontal={true}
            contentContainerStyle={{ paddingBottom: '5%' }}
            data={weather.results.forecast}
            keyExtractor={item => item.date}
            renderItem={({ item }) => <Forecast data={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </>
      )}
    </Container>
  )
}
