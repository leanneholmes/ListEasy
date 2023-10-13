import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: 12,
    marginHorizontal: 4,
  },
  title: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.grey,
    fontSize: 13,
    marginTop: 6,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
