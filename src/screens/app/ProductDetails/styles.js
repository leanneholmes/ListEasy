import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {},
  image: {
    width: '100%',
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -19,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '500',
    color: colors.black,
  },
  price: {
    fontSize: 30,
    weight: 'bold',
    marginVertical: 8,
  },
  description: {
    color: colors.textGrey,
    fontWeight: '300',
    marginVertical: 8,
  },
  bookmarkContainer: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 8,
    marginRight: 16,
  },
  bookmarkIcon: {
    width: 17,
    height: 21,
  },
  backContainer: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 24,
    borderRadius: 8,
    marginRight: 16,
    position: 'absolute',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});
