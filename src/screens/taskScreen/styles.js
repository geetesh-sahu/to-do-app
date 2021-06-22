import {StyleSheet} from 'react-native';
import scale from '../../utils/scale';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    margin: 33,
  },
  formContainer: {
    flex: 1,
  },
  plusLogo: {
    alignItems: 'center',
  },
  text: {
    fontSize: 33,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  btn: {
    margin: scale(13),
    backgroundColor: 'gray',
    borderRadius: scale(13),
    padding: 13,
    alignItems: 'center',
  },
  btnOuter: {
    alignItems: 'center',
  },
  form: {
    paddingEnd: 39,
    paddingStart: 39,
  },
});
export default styles;
