import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { User } from '../../interface/authInterface';

interface Prosp {
    user: User,
    openModal: (value: boolean) => void,
}

const BackgrundInformation = ({user,openModal}:Prosp) => {
  return (
    <View style={{position: 'relative'}}>
        <View
            style={{
                width: '100%',
                height: 200
            }}
        >
            <Image
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                source={{
                    uri: user?.imgUserBackground 
                }}
            />
        </View>

        <View style={{
            alignItems: 'center',
            top: -25,
            width: '100%',
            paddingHorizontal: 10
        }}>
            <View style={{
                position: 'relative',
                alignItems: 'center',
                padding: 20,
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 15,
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity:  0.18,
                shadowRadius: 4.59,
                elevation: 5
            }}>
                <View style={{
                    width: 150,
                    height: 150,
                    position: 'absolute',
                    backgroundColor: 'white',
                    top: -100,
                    padding: 5,
                    borderRadius: 5,
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity:  0.17,
                    shadowRadius: 2.54,
                    elevation: 3
                }}>

                    <Image 
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 5
                        }}
                        source={{
                            uri: user?.imgUser
                        }} />

                </View>

                <View style={{
                    marginTop: 40,
                    width: '100%',
                    alignItems: 'center',
                    gap: 15
                    }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#333333'
                    }}>{user?.name}</Text>

                    <View style={{
                        flexDirection: 'row',
                        gap: 30
                    }}>
                        <TouchableOpacity
                            onPress={()=>openModal(true)}
                        >
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: '#828282',
                                textDecorationLine: 'underline'
                            }}>
                                <Text 
                                    style={{
                                        fontWeight: 'bold',
                                        color: 'black'
                                    }}>{user?.nfollowing}  
                                    
                                </Text> Following
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>openModal(true)}
                        >
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: '#828282',
                                textDecorationLine: 'underline'
                            }}><Text style={{
                                fontWeight: 'bold',
                                color: 'black'
                            }}>{user?.nfollowers}</Text> Followers</Text>
                        </TouchableOpacity>
                    </View>

                    <Text>{user?.bio}</Text>


                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#2F80ED',
                            paddingVertical: 10,
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

            </View>
        </View>
    </View>
  )
}

export default BackgrundInformation