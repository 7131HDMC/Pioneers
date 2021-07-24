import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/screens/Home/';
import ListScreen from '~/screens/ListScreen';

const listMenu = {
    Home,
    ListScreen
};

const Routes = createAppContainer(createSwitchNavigator(listMenu));

export default Routes;
