import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Home from './components/Home';
import { ROUTES } from '../Routes';
import { AuthContext } from '../App';

const Main: React.FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.Home}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={ROUTES.Home} component={Home} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: any) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={() => signOut()} />
    </DrawerContentScrollView>
  );
};

export default Main;
