import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// import {Transition} from 'react-native-reanimated';
import navigationString from '../navigations/navigationString';
import {allRoutes} from './routes';

// const SlideTransition = (transitionProps: any, prevTransitionProps: any) => {
//   return (
//     <Transition.Together>
//       <Transition.Out
//         type="slide-left"
//         durationMs={400}
//         interpolation="easeIn"
//       />
//       <Transition.In
//         type="slide-right"
//         durationMs={400}
//         interpolation="easeOut"
//       />
//     </Transition.Together>
//   );
// };

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName={navigationString.HOME}
      // transitionConfig={SlideTransition}
      screenOptions={{
        headerShown: false,
      }}>
      {allRoutes.map(({component, key, name}) => (
        <Stack.Screen key={key} component={component} name={name} />
      ))}
    </Stack.Navigator>
  );
}

export default Routes;
