import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main/';
import ListScreen from '~/pages/ListScreen';
import BiographyScreen from '~/pages/BiographyScreen';

const listMenu = {
    BiographyScreen,
    Main,
    ListScreen,
    
};

const Routes = createAppContainer(createSwitchNavigator(listMenu));

export default Routes;
