import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import SaveScreen from '../../screens/SaveScreen';
import ExploreScreen from '../../screens/ExploreScreen';
import ProfileScreen from '../../screens/ProfileScreen';

export type ProductsStackParams = {
  HomeScreen: undefined,
  ExploreScreen: undefined,
  SaveScreen: undefined,
  ProfileScreen: { id?: string }
}

const Tab = createBottomTabNavigator<ProductsStackParams>();

function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            
        }}
        initialRouteName='HomeScreen'
    >

      <Tab.Screen name="HomeScreen" options={{
        tabBarIcon: ({focused}) =>  <Icon name='home' color={focused ? '#2F80ED' : '#828282'} size={ 25 } />
        }} component={HomeScreen} />
      <Tab.Screen name="ExploreScreen" options={{
        tabBarIcon: ({focused}) =>  <Icon name='compass'  color={focused ? '#2F80ED' : '#828282'} size={ 25 } />
        }} component={ExploreScreen} />
      <Tab.Screen name="SaveScreen" options={{
        tabBarIcon: ({focused}) =>  <Icon name='bookmark'  color={focused ? '#2F80ED' : '#828282'} size={ 25 } />
        }} component={SaveScreen} />
      <Tab.Screen name="ProfileScreen" options={{
            tabBarItemStyle:{
              display: 'none'
            },
            tabBarShowLabel: false,
            tabBarIconStyle: {
              display: 'none'
            },
          }} component={ProfileScreen} />
      </Tab.Navigator>
  );
}

export default MyTabs;