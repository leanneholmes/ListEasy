import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
  },
  titleContainer: {
    marginVertical: 40,
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonContainer: {
    height: 58,
    width: '100%',
    marginLeft: 36,
  },
});
