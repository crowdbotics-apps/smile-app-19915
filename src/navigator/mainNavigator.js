import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings6120005Navigator from '../features/Settings6120005/navigator';
import BlankScreen1120004Navigator from '../features/BlankScreen1120004/navigator';
import BlankScreen0120003Navigator from '../features/BlankScreen0120003/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings6120005: { screen: Settings6120005Navigator },
BlankScreen1120004: { screen: BlankScreen1120004Navigator },
BlankScreen0120003: { screen: BlankScreen0120003Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
