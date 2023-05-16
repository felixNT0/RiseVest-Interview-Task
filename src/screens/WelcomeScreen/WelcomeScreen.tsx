import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AuthSteps from '../../components/AuthSteps/AuthSteps';
import RiseWelcomeComponent from '../../components/RiseWelcomeComponent/RiseWelcomeComponent';
import {useAppContext} from '../../contexts/AppContext';
import HomeScreen from '../Home/HomeScreen';

export default function WelcomeScreen({navigation}: any) {
  const [showScreen, setShowScreen] = useState(false);
  const {currentUser} = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 3000);
  }, [showScreen]);

  if (currentUser.isLoggedIn) {
    return <HomeScreen navigation={navigation} />;
  }
  return (
    <View>
      {!currentUser.isLoggedIn && showScreen ? (
        <AuthSteps navigation={navigation} />
      ) : (
        <RiseWelcomeComponent />
      )}
    </View>
  );
}
