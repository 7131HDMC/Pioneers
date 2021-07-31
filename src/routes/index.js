import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '~/screens/Home/';
import ListWomen from '~/screens/ListWomen';
import {SectionDetails} from '~/screens/SectionDetails';

const listMenu = {
    Home,
    ListWomen,
    SectionDetails
};

const Routes = createAppContainer(createSwitchNavigator(listMenu));

export default Routes;
