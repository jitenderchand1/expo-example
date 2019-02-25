import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/home';
import Tabs from './screens/tabs';
import Accordion from './screens/accordion';



const App =  createDrawerNavigator(
  {
    Home: {screen: Home},
    Tabs: {screen: Tabs},
    Accordion: {screen: Accordion},
  },

);


export default createAppContainer(App);
