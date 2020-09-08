import React from 'react';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

// import { Container } from './styles';

interface IRouteParams {
  github_username: string;
}

const Profile: React.FC = () => {
  const { params } = useRoute();
  const { github_username } = params as IRouteParams;

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${github_username}` }}
    />
  );
};

export default Profile;
