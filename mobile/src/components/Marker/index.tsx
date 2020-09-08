import React, { useCallback } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { AvatarImage, CallOutDev, Name, Bio, Techs } from './styles';
import { IDevProps } from '../../pages/Main';

interface IMarkerProps {
  dev: IDevProps;
}

const MarkerMap: React.FC<IMarkerProps> = ({ dev }) => {
  const { navigate } = useNavigation();

  const handleNavigateToProfile = useCallback(() => {
    navigate('Profile', { github_username: dev.github_username });
  }, [navigate, dev.github_username]);

  return (
    <Marker
      coordinate={{
        longitude: dev.location.coordinates[0],
        latitude: dev.location.coordinates[1],
      }}
    >
      <AvatarImage
        source={{
          uri: dev.avatar_url,
        }}
      />
      <Callout onPress={handleNavigateToProfile}>
        <CallOutDev>
          <Name>{dev.name}</Name>
          <Bio>{dev.bio}</Bio>
          <Techs>{dev.techs.join(', ')}</Techs>
        </CallOutDev>
      </Callout>
    </Marker>
  );
};

export default MarkerMap;
