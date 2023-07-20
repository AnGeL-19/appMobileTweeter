import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { User } from '../interface/authInterface'
import { IUserProfile } from '../interface/postInterface'

interface Props{
    user: IUserProfile | User,
    onlyImage?: boolean
}

const Profile = ({user, onlyImage}:Props) => {
    
    console.log('profile', '------------');

  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <Image 
            style={styles.image}
            source={{
                uri: user?.imgUser
            }} />
        </View>
        {
            !onlyImage
            &&
            <View style={styles.containerInfo}>
                <Text style={styles.username}>
                    {user.name}
                </Text>
                <Text style={styles.info}>
                    25 Agust at 2023
                </Text>
            </View>
        }
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
    },
    containerImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    containerInfo: {   
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 5
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold'     
    },
    info: {
        color: '#828282', 
        fontSize: 14
    }
})


export default Profile