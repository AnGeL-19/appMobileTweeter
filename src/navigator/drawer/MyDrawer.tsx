import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from '../tabs/Tab';
import DrawerMenu from '../../components/Menu/DrawerMenu';
import SettingsScreen from '../../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={ (props) => <DrawerMenu { ...props } /> }
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right'
        
      }}
    >
      <Drawer.Screen name="TabsNavigation" 
      options={{title:'Profile'}} 
      component={MyTabs} />
      <Drawer.Screen name="SettingsScreen" 
      component={SettingsScreen} />
    </Drawer.Navigator>
  );
}



export default MyDrawer;