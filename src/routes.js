import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main/';
import ListScreen from '~/pages/ListScreen';

const listMenu = {
    Main,
    ListScreen
};

const Routes = createAppContainer(createSwitchNavigator(listMenu));

export default Routes;
