import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../Profile';

const Comment = () => {
  return (
    <View style={styles.container}>
        {/* image profile */}
        <Profile onlyImage  />

        {/* comment info */}
        <View style={styles.containerCommentsInfo}>

            <View style={styles.containerLikesAndInfo}>

                <View style={styles.containerInfo}>
                    <Text style={styles.textUsername}>Angel Muñoz</Text>
                    <Text style={styles.date}>25 agust at 2012</Text>
                </View>
                <View >
                    <Text style={styles.textInfo}>I’ve felt this pull many times, like while road tripping through Morocco. Seeking out the vastness of the desert, and looking inward at the same time.</Text>
                </View>
            </View>
            <View style={styles.containerLikes}>
                <TouchableOpacity
                    style={styles.btnLike}
                >
                    <Icon name="heart-outline" size={15} />
                    <Text>Liked</Text>
                </TouchableOpacity>
                <View>
                    <Text>12k Likes</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 15
    },
    containerCommentsInfo: {
        flex: 1,
        flexDirection: 'column',
        gap: 5
    },
    containerLikesAndInfo: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        backgroundColor: '#FAFAFA',
        borderRadius: 5,
        padding: 5,
    },
    containerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    textUsername: {
        fontSize:16, 
        fontWeight: '500'
    },
    date: {
        fontSize:14, 
        fontWeight: '400'
    },
    textInfo: {
        fontSize:16, 
        fontWeight: '400'
    },
    containerLikes: {
        flexDirection: 'row',
        gap: 15
    },
    btnLike: {  
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5   
    },


})

export default Comment