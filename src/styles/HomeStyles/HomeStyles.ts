import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignitems: 'center',
    paddingTop: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 99,
    backgroundColor: '#FFFFFF',
  },
  header_text: {
    color: 'black',
    fontSize: RFValue(15, height),
  },
  header_user_name: {
    fontSize: RFValue(20, height),
    color: 'black',
  },
  header_earn_bonus_holder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    alignitems: 'center',
  },
  header_earn_bonus: {
    display: 'flex',
    justifyContent: 'center',
    alignitems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: '#0898A0',
    borderRadius: 20,
    color: '#FFFFFF',
  },
  add_money_button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: 'rgba(113, 135, 156, 0.2)',
    borderRadius: 5,
    marginTop: 15,
  },
  create_and_view_plan: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 15,
  },
  create_investment_button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 188,
    height: 243,
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    borderRadius: 12,
    marginTop: 25,
    marginLeft: 12,
  },
  main_create_inventment_button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 42.64,
    height: 42.64,
    backgroundColor: 'rgba(64, 187, 195, 0.15)',
    borderRadius: 32.3876,
  },
  contact_us: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 5,
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 10,
    marginHorizontal: 12,
  },

  contact_us_button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 123,
    height: 42,
    backgroundColor: '#0898A0',
    borderRadius: 6,
  },
  quotes_card: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 13,
    backgroundColor: '#0898A0',
    borderRadius: 15,
    marginBottom: 30,
  },
});
