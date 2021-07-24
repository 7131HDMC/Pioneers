import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/screens/Home/';
import ListWomen from '~/screens/ListWomen';

const listMenu = {
    Home,
    ListWomen
};

const Routes = createAppContainer(createSwitchNavigator(listMenu));

export default Routes;
