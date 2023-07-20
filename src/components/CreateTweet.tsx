import React, {useMemo, useState} from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Profile from './Profile'
import Icon from 'react-native-vector-icons/Ionicons';
import StatusTweet from './StatusTweet';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthProvider';

const CreateTweet = () => {

    const { user } = useContext(AuthContext)
    const [showTweetPrivate, setShowTweetPrivate] = useState(false)

    console.log('create tweet', '------------');

  return (
    <View style={{
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
        zIndex: 999
    }}>
        <View
            style={{
            flex:  1,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity:  0.18,
            shadowRadius: 4.59,
            elevation: 5
            }}
        >
            <Text style={{
            marginBottom: 10
            }}>Tweet something</Text>
            <View style={{
            paddingTop: 10,
            flexDirection: 'row',
            gap: 15,
            borderTopWidth: 1,
            borderColor: '#F2F2F2',
            }}>
            <Profile user={user!} onlyImage />
            <View style={{
                flex: 1
            }}>
                <TextInput
                editable
                multiline
                numberOfLines={4}
                placeholder='Insert description...'
                style={{
                    flex:1,
                    textAlignVertical:'top',
                    justifyContent: "flex-start", 
                    fontSize: 16,
                    color: '#BDBDBD'
                }}
                
                />
            </View>
            </View>

            <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
            }}>
            <View style={{
                position: 'relative',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center'
            }}>
                <TouchableOpacity>
                <Icon name="image-outline" size={20} color='#2F80ED' />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>setShowTweetPrivate(!showTweetPrivate)}
                style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center'
                }}
                >
                <Icon name="globe-outline" size={20} color='#2F80ED'/>
                <Text
                    style={{
                    color: '#2F80ED'
                    }}
                >Everyone can reply</Text>
                </TouchableOpacity>
                {
                    showTweetPrivate
                    &&
                    (
                        <StatusTweet />
                    )
                }
                
            </View>
            <TouchableOpacity
                style={{
                paddingHorizontal: 25,
                paddingVertical: 10,
                backgroundColor: '#2F80ED',
                borderRadius: 5
                }}
            >
                <Text style={{
                color: 'white',
                fontWeight: '500'
                }}>Tweet</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>   
  )
}

export default CreateTweet