import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  all_input: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 32,
  },

  description: {
    color: '#71879C',
    fontSize: 15,
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
    fontSize: 15,
    textAlign: 'center',
  },
  already_have_account: {
    color: '#71879C',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 170,
  },
});
