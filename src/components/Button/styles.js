import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 20,
    flex: 1,
    width: '90%',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
