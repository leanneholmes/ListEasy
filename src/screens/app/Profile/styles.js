import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  header: {marginTop: 24, marginRight: 24},
  container: {
    padding: 24,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 14,
    color: colors.grey,
    marginBottom: 16,
  },
  buttonContainer: {
    flex: 0,
    marginLeft: 20,
    height: 56,
    width: '100%',
  },
  content: {
    flex: 1,
  },
});
