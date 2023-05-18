import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import navigationString from '../navigations/navigationString';
import {allRoutes} from './routes';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName={navigationString.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      {allRoutes.map(({component, key, name}) => (
        <Stack.Screen key={key} component={component} name={name} />
      ))}
    </Stack.Navigator>
  );
}
