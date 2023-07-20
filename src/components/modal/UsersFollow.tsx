import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Profile from '../Profile'
import Icon from 'react-native-vector-icons/Ionicons';

const UsersFollow = () => {
  return (
    <View style={{
        borderTopWidth: 2,
        borderColor: '#F2F2F2',
        paddingVertical: 10,
        flexDirection: 'column',
        gap: 15
    }}>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Profile/>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                    width: 100,
                    height: 30,
                    paddingHorizontal: 10,
                    backgroundColor: '#2F80ED',
                    borderRadius: 5
                }}
            >
                <Icon name='person-add-outline' size={15} color='white' />
                <Text style={{
                    textAlign: 'center',
                    color: 'white'
                }}>Following</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text 
                ellipsizeMode="tail"
                numberOfLines={5}
                style={{
                fontWeight: '500',
            }}>
                Follow me on IG: @arstyy
                Follow me on IG: @arstyy
                Follow me on IG: @arstyy
                Follow me on IG: @arstyy
                Follow me on IG: @arstyy
                Follow me on IG: @arstyy
                Follow me on IG: @arstyy
                Follow me on IG: @arstyy
                Follow me on IG: @arstyy
            </Text>
        </View>

    </View>
  )
}

export default UsersFollow