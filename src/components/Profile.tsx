import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { User } from '../interface/authInterface'

interface Props{
    user?: User,
    onlyImage?: boolean
}

const Profile = ({user, onlyImage}:Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <Image 
            style={styles.image}
            source={{
                uri: 'https://i.pinimg.com/564x/18/22/6d/18226d06993245cff431a4d8177249c0.jpg'
            }} />
        </View>
        {
            !onlyImage
            &&
            <View style={styles.containerInfo}>
                <Text style={styles.username}>
                    Angel Muñoz
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