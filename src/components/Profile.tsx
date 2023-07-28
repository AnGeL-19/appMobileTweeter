import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { User } from '../interface/authInterface'
import { Link } from '@react-navigation/native';
import { dateFormat } from '../helpers/dateFormat';

interface Props{
    user: User,
    onlyImage?: boolean,
    showFollow?: boolean,
    dateTweet?: string
}

const Profile = ({user, onlyImage, showFollow, dateTweet}:Props) => {
    
    console.log('profile', '------------');

  return (
    <View >
        <Link to={{
            screen: 'ProfileScreen',
            params: {id: user.uid}
        }}
        
        >
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
                        {
                            showFollow 
                            ? `${user.followers?.length} ${user.followers!.length > 1 ? 'followers': 'follower'}` 
                            : dateFormat(dateTweet!)
                        }
                    </Text>
                </View>
            }
        </View>
        </Link>
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