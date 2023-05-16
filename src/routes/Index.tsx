import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {allNavigations} from '../navigations/navigation';
import navigationString from '../navigations/navigationString';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName={navigationString.HOME}
      screenOptions={{headerShown: false}}>
      {allNavigations.map(({component, key, name}) => (
        <Stack.Screen key={key} component={component} name={name} />
      ))}
    </Stack.Navigator>
  );
}

export default Routes;
