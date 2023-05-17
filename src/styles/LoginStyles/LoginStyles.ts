import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  all_input: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 50,
  },
  title: {
    fontSize: RFValue(25, height),
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 32,
  },

  description: {
    color: '#71879C',
    fontSize: RFValue(15, height),
  },

  input: {
    height: 40,
    width: '80%',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 16,
  },
  forget_password_link: {
    color: '#0898A0',
    marginTop: 30,
    fontSize: RFValue(15, height),
    textAlign: 'center',
  },
  already_have_account: {
    color: '#71879C',
    fontSize: RFValue(15, height),
    textAlign: 'center',
    marginTop: 170,
  },
});
