import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Profile from '../Profile'
import Icon from 'react-native-vector-icons/Ionicons';
import { User } from '../../interface/authInterface';
import { IUserFollow } from '../../interface/followInterface';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthProvider';
import tweeterApi from '../../api/apiTweeter';

interface Props{
    user: IUserFollow,
    following?: boolean;
}

const UsersFollow = ({user,following}:Props) => {

    const {user: userAuth, followUnfollow } = useContext(AuthContext)

    const handleFollowUnFollow = async (id: string) => {

        try {

            const resp = await tweeterApi.put(`user/followUnfollow/${id}`)
            console.log(resp.data);
            if (resp.data.ok) {
                followUnfollow(id)
            }
        } catch (error) {
            console.log(error);
            
        }
        

    }

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
            <Profile user={user} showFollow />
            <TouchableOpacity
                onPress={()=>handleFollowUnFollow(user.uid)}
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
                {

                    userAuth?.following?.find(f => f === user.uid)
                    ? <Icon name='person-remove-outline' size={15} color='white' />
                    : <Icon name='person-add-outline' size={15} color='white' />

                }
                
                <Text style={{
                    textAlign: 'center',
                    color: 'white'
                }}>
                    {

                        userAuth?.following?.find(f => f === user.uid)
                        ? 'Following'
                        : 'Follow'
                                        
                    }
                </Text>
            </TouchableOpacity>
        </View>
        {
            user.bio
            &&
            (
            <View>
                <Text 
                    ellipsizeMode="tail"
                    numberOfLines={5}
                    style={{
                    fontWeight: '500',
                }}>
                    {user.bio}
                </Text>
            </View>
            )
        }
        

    </View>
  )
}

export default UsersFollow