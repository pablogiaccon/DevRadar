import React, { useEffect, useState, useCallback } from 'react';
import MapView from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import MarkerMap from '../../components/Marker';
import FormSearch from '../../components/FormSearch';
import api from '../../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../../services/socket';

// import { Container } from './styles';

interface IRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface IDevProps {
  _id: string;
  github_username: string;
  name: string;
  avatar_url: string;
  bio: string;
  techs: [string];
  location: {
    coordinates: [number, number];
  };
}

const Main: React.FC = () => {
  const [devs, setDevs] = useState<IDevProps[]>([]);
  const [techs, setTechs] = useState('');
  const [currentRegion, setCurrentRegion] = useState<IRegion>({} as IRegion);

  const setupWebsocket = useCallback(() => {
    disconnect();

    const { latitude, longitude } = currentRegion;
    if (latitude) {
      connect({ latitude, longitude, techs });
    }
  }, [currentRegion, techs]);

  const loadDevs = useCallback(async () => {
    const { latitude, longitude } = currentRegion;

    setupWebsocket();

    if (latitude && longitude) {
      const response = await api.get<IDevProps[]>('search', {
        params: {
          latitude,
          longitude,
          techs,
        },
      });

      setDevs(response.data);
    }
  }, [currentRegion, techs, setupWebsocket]);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  useEffect(() => {
    subscribeToNewDevs((dev: IDevProps) => setDevs([...devs, dev]));
  }, [devs]);

  useEffect(() => {
    loadDevs();
    setupWebsocket();
  }, [loadDevs, setupWebsocket]);

  const handleRegionChanged = useCallback(
    (region: IRegion) => {
      setCurrentRegion(region);
      setupWebsocket();
    },
    [setupWebsocket],
  );

  if (!currentRegion.latitude) {
    return null;
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={{ flex: 1 }}
      >
        {devs.map(dev => (
          <MarkerMap key={dev._id} dev={dev} />
        ))}
      </MapView>
      <FormSearch loadDevs={loadDevs} techs={techs} setTechs={setTechs} />
    </>
  );
};

export default Main;
