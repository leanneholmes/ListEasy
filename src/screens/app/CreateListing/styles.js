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
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'dotted',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginTop: 8,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPlus: {
    color: colors.white,
    fontSize: 28,
    marginTop: -4,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 16,
  },
  imageCont: {
    flexDirection: 'row',
    marginTop: 8,
    marginRight: 8,
  },
  delete: {
    width: 24,
    height: 24,
    marginLeft: -16,
    marginTop: -10,
  },
  textarea: {
    minHeight: 150,
    paddingTop: 16,
  },
  button: {
    marginBottom: 160,
  },
});
