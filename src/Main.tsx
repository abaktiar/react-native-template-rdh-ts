import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './components/Home';

const Main: React.FC = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default Main;
