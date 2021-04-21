import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// reducers
import app from 'src/screens/App/redux/reducer';
import login from 'src/screens/App/redux/reducer';
import signUp from 'src/screens/SignUp/redux/reducer';
import dashboard from 'src/screens/Dashboard/redux/reducer';

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  timeout: null,
};

export default {
  app: persistReducer(appPersistConfig, app),
  signUp,
  login,
  dashboard
};
