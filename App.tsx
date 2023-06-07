/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary';
import AppProvider from './src/contexts/AppContext';
import ErrorScreen from './src/screens/ErrorScreen/ErrorScreen';
import FundPlanScreen from './src/screens/FundPlan/FundPlanScreen';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const [screenDimensions, setScreenDimensions] = useState<any>(
    Dimensions.get('window'),
  );

  useEffect(() => {
    const onChange = ({window}: any) => {
      setScreenDimensions(window);
    };

    Dimensions?.addEventListener('change', onChange);
  }, [screenDimensions]);

  const {width, height} = screenDimensions;

  const styles = StyleSheet.create({
    bg: {
      backgroundColor: '#FFFFFF',
      height: height,
      width: width,
    },
  });

  return (
    <SafeAreaView>
      <View style={styles.bg}>
        <ErrorBoundary>
          <NavigationContainer fallback={<ErrorScreen />}>
            <QueryClientProvider client={queryClient}>
              <AppProvider>
                <FundPlanScreen />
              </AppProvider>
            </QueryClientProvider>
          </NavigationContainer>
        </ErrorBoundary>
      </View>
    </SafeAreaView>
  );
}

export default App;
