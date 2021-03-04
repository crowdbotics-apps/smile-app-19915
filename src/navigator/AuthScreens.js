import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import {
  Login,
  Register,
  ResetPassword,
  Dashboard,
  Goals
} from 'src/screens';

const authStack = createStackNavigator();

const AuthStackScreen = () => (
  <authStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
  >
    <authStack.Screen name="Login" component={Login} />
    <authStack.Screen name="Register" component={Register} />
    <authStack.Screen name="ResetPassword" component={ResetPassword} />
    <authStack.Screen name="Dashboard" component={Dashboard} />
    <authStack.Screen name="Goals" component={Goals} />
  </authStack.Navigator>
);

export default AuthStackScreen;
