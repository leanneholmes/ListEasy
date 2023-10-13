import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  header: {
    marginTop: 24,
  },
  container: {
    padding: 24,
    flex: 1,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.grey,
    marginBottom: 8,
  },
  item: {},
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
    marginLeft: 18,
    marginTop: -20,
    marginBottom: 20,
    height: 56,
    width: '100%',
  },
  content: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
