/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppProvider from './src/contexts/AppContext';
import Routes from './src/routes/Index';

const {width, height} = Dimensions.get('window');

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.bg}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <AppProvider>
              <Routes />
            </AppProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFFFFF',
    height: height,
    width: width,
  },
});

export default App;
