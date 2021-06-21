import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  backImage: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
  },
  midWrapper: {
    paddingTop: 8,
    borderWidth: 2,
    borderRadius: 70,
    height: 130,
    borderColor: Colors.lightgolden,
    alignItems: 'center',
  },
  progressWrapper: {height: 110},
  buttonWrapper: {
    width: '100%',
    height: 60,
    borderRadius: 80,
    alignSelf: 'center',
    padding: 5,
    top: -30,
  },
  upgradeNow: {opacity: 0.7},
});
