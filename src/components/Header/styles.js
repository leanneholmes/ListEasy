import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors.js';

export const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  space: {
    width: 24,
  },
  searchContainer: {
    marginBottom: -30,
  },
});
