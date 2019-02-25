import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/home';
import Tabs from './screens/tabs';



const App =  createDrawerNavigator(
  {
    Home: {screen: Home},
    Tabs: {screen: Tabs},
  },

);


export default createAppContainer(App);
