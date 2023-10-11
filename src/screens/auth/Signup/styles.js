import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 13,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 30,
    alignSelf: 'center',
    width: '100%',
  },
  footerText: {
    color: colors.blue,
    marginBottom: 56,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
});
