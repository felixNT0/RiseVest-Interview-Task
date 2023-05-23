import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 15,
  },
  all_input: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 30,
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

  already_have_account: {
    color: '#71879C',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 7,
  },

  dont_have_account: {
    color: '#71879C',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 7,
  },

  terms_and_condition: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
    marginBottom: 10,
  },

  phone_number_container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'column',
  },
  labelContainer: {
    position: 'absolute',
    top: -7,
    left: 35,
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 4,
    borderRadius: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0898A0',
  },
  input_container: {
    fontSize: 16,
    width: '100%',
    height: 65,
    fontWeight: '400',
    color: '#000000',
    borderColor: '#0898A0',
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  calenderIcon: {
    marginLeft: 8,
    position: 'absolute',
    top: 18,
    right: 20,
  },
});
