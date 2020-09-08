import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7d40e7',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'DevRadar' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Perfil no Github',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
