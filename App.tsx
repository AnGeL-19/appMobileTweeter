/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigator from './src/navigator/Navigators';
import { Text, View } from 'react-native';
import { AuthProvider } from './src/context/auth/AuthProvider';

function App(): JSX.Element {
  
  return (
    <AuthProvider>
      <Navigator/>
    </AuthProvider>
  );
}


{/* <Navigator/> */}


export default App;
