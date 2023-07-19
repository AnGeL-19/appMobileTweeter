import React, { useContext } from 'react'
import {  ScrollView, View } from 'react-native'
import Header from '../components/Header'
import { AuthContext } from '../context/auth/AuthProvider'
import BackgrundInformation from '../components/profile/BackgrundInformation'
import FilterTweets from '../components/profile/FilterTweets'
import Posts from '../components/post/Posts'

const ProfileScreen = () => {

    const { user } = useContext(AuthContext)

    const filter = [
        {
            name: 'tweets',
            status: true,
            text: 'Tweets'
        },
        {
            name: 'tweetsReplies',
            status: false,
            text: 'Tweets & Replies'
        },
        {
            name: 'media',
            status: false,
            text: 'Media'
        },
        {
            name: 'likes',
            status: false,
            text: 'Likes'
        },
    ]

  return (
    <View>
        <Header />
        <ScrollView 
            showsVerticalScrollIndicator={false}
        >
            <View style={{marginTop: 70}}></View>
            <BackgrundInformation user={user!} />

            <FilterTweets filters={filter} />

            <Posts />
            
        </ScrollView>
    </View>
  )
}

export default ProfileScreen