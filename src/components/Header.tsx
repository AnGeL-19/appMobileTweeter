import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import SmallLogo from '../assets/tweeter-small.svg';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthProvider';


const Header = () => {

    const { user } = useContext(AuthContext)
    const navigator = useNavigation()

  return (
    <View style={{ 
        top: 0,
        left: 0,
        zIndex: 10,
        height: 70, 
        width: '100%', 
        position: 'absolute', 
        backgroundColor: 'white'
        }}>
        <View style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

            <SmallLogo width={40} height={40} />

            <TouchableOpacity
            onPress={()=>navigator.dispatch(DrawerActions.openDrawer())}
            style={{
                height: 40,
                width: 40,
                borderRadius: 10,
                overflow: 'hidden'
            }}>
                <Image 
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                source={{
                    uri: user?.imgUser
                }}/>
            </TouchableOpacity>

        </View>
        

    </View>
  )
}

export default Header