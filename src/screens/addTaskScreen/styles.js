import {StyleSheet} from 'react-native';
import scale from '../../utils/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown',
  },
  text: {
    fontSize: scale(30),
    color: 'white',
    padding: scale(10),
  },
  btn: {
    margin: scale(13),
    backgroundColor: 'gray',
    borderRadius: scale(13),
  },
});
export default styles;
