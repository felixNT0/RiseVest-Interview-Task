/* eslint-disable react-native/no-inline-styles */
import {useNavigation, useRoute} from '@react-navigation/native';
import {default as React, useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../../contexts/AppContext';
import navigationString from '../../navigations/navigationString';

const {height} = Dimensions.get('window');

const BottomNavigationBar = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const {logout} = useAppContext();
  const navigation: any = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const {name} = route;

    if (name === 'HOME') {
      setActiveTab('Home');
    }
    if (name === 'ALL_PLANS') {
      setActiveTab('View_All_Plan');
    }
    if (name === 'CREATE_A_PLAN') {
      setActiveTab('Create_Plan');
    }
  }, [activeTab, route]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
        onPress={() => setActiveTab('Home')}>
        <Ionicons
          name="home"
          size={24}
          style={{color: activeTab === 'Home' ? '#41BCC4' : '#94A1AD'}}
        />
        <Text
          style={[
            styles.tabLabel,
            {color: activeTab === 'Home' ? '#41BCC4' : '#94A1AD'},
          ]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Create_Plan' && styles.activeTab]}
        onPress={() => {
          setActiveTab('Create_Plan');
          navigation.navigate(navigationString.CREATE_A_PLAN);
        }}>
        <Ionicons
          name="add"
          size={24}
          style={{color: activeTab === 'Create_Plan' ? '#41BCC4' : '#94A1AD'}}
        />
        <Text
          style={[
            styles.tabLabel,
            {color: activeTab === 'Create_Plan' ? '#41BCC4' : '#94A1AD'},
          ]}>
          Create Plan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'View_All_Plan' && styles.activeTab]}
        onPress={() => {
          setActiveTab('View_All_Plan');
          navigation.navigate(navigationString.ALL_PLANS);
        }}>
        <Ionicons
          name="list"
          size={24}
          style={{color: activeTab === 'View_All_Plan' ? '#41BCC4' : '#94A1AD'}}
        />
        <Text
          style={[
            styles.tabLabel,
            {color: activeTab === 'View_All_Plan' ? '#41BCC4' : '#94A1AD'},
          ]}>
          Plans
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Logged_Out' && styles.activeTab]}
        onPress={() => {
          setActiveTab('Logged_Out');
          logout();
        }}>
        <Ionicons
          name="power"
          size={24}
          style={{color: activeTab === 'Logged_Out' ? '#41BCC4' : '#94A1AD'}}
        />
        <Text
          style={[
            styles.tabLabel,
            {color: activeTab === 'Logged_Out' ? '#41BCC4' : '#94A1AD'},
          ]}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: '#94A1AD',
    borderTopWidth: 1,
    elevation: 7,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginHorizontal: 4,
    height: 50,
    marginBottom: 5,
  },
  activeTab: {
    // backgroundColor: '#41BCC4',
  },
  tabLabel: {
    color: 'white',
    fontSize: RFValue(12, height),
    marginTop: 4,
  },
});

export default BottomNavigationBar;
