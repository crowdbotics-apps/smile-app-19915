import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  topCardContainer: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    borderRadius:10,
  },
  topCardText: {
    width: '100%',
    flex: 1,
    height: 80,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity:0.5,
    height:90,
    
  },
  text:{
    marginLeft: 20,
  }
});
