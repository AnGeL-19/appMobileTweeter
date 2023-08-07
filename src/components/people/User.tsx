import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { IUserFollow } from '../../interface/followInterface'
import Profile from '../Profile'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props{
    user: IUserFollow
}

const User = ({ user }: Props) => {
  return (
    <View style={{
        width: '100%',
        padding: 10,
        
    }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 10,
          flexDirection: 'column',
          gap: 5
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Profile user={user} showFollow />
          <TouchableOpacity
                style={{
                    width: 100,
                    height: 35,
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#2F80ED',
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                    borderRadius: 5,
                }}
            >
                <Icon name='person-add' color="white" size={ 15 } />
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'white'
                }}>Follow</Text>
            </TouchableOpacity>
        </View>
        
        <View
          style={{
            width: '100%',
            height: 80,
            overflow: 'hidden', 
            borderRadius: 10
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%'
            }}
            source={{
              uri: user.imgUserBackground
            }}
          />
        </View>
      </View>
     
        
    </View>
  )
}

export default User