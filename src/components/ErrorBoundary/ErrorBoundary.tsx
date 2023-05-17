import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AppButton from '../../components/AppButton/AppButton';
import AppNavigationButton from '../../components/AppNavigationButton/AppNavigationButton';
import {PRIMARY_COLOR} from '../../utils/color';

const {width, height} = Dimensions.get('window');

type ChildrenComponent = {
  children: React.ReactNode;
};

import {useNavigation} from '@react-navigation/native';

class ErrorBoundary extends Component<ChildrenComponent> {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });

    // You can also log the error to an error reporting service here
    // or perform any other necessary error handling steps.
  }

  componentDidMount() {
    // const route = useRoute();
    // const {error} = route.params;
    // console.log(error);
  }

  handleRetry = () => {
    const navigation = useNavigation();
    navigation.goBack();
    this.setState((prev: any) => ({...prev, hasError: false})); // Replace with the appropriate navigation action to retry the previous operation
  };

  render() {
    if (this?.state?.hasError) {
      // Render the error screen if an error has occurred
      return (
        <View style={styles.container}>
          <AppNavigationButton
            IconName="bug-outline"
            size={100}
            BodySize={50}
          />
          <Text style={styles.errorText}>{'Oops! Something went wrong.'}</Text>
          <AppButton
            label="Retry"
            onPress={() => this.handleRetry()}
            width={310}
          />
        </View>
      );
    }

    // Render the children components if no error has occurred
    return this?.props?.children;
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    width: width,
    height: height,
    zIndex: 99,
  },
  errorText: {
    fontSize: RFValue(18, height),
    marginBottom: 20,
    color: PRIMARY_COLOR,
    marginTop: 50,
  },
});

export default ErrorBoundary;
