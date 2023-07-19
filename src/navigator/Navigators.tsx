import React, {useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stack/AuthStack';
import { AuthContext } from '../context/auth/AuthProvider';
import HomeScreen from '../screens/HomeScreen';
import MyDrawer from './drawer/MyDrawer';


export default function Navigator() {
  
  const {status} = useContext(AuthContext)

  if (status === 'checking') {
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={30} color={'black'} />
    </View>)
  }

  return (
    <NavigationContainer>

        {
          (status !== 'authenticated')
          ? <AuthStack />
          : <MyDrawer />
        }
        
    </NavigationContainer>
  );
}