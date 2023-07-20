import React, { useContext, useEffect, useState } from 'react'
import {  ScrollView, View } from 'react-native'
import Header from '../components/Header'
import { AuthContext } from '../context/auth/AuthProvider'
import BackgrundInformation from '../components/profile/BackgrundInformation'
import FilterTweets from '../components/profile/FilterTweets'
import Posts from '../components/post/Posts'
import ModalUsers from '../components/modal/ModalUsers'
import tweeterApi from '../api/apiTweeter'
import { IPost, PostsResponse } from '../interface/postInterface'

const ProfileScreen = () => {

    const { user } = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false)
    const [data, setdata] = useState<IPost[]>([])

    async function getTweets(){
        try {
            const resp = await tweeterApi.get<PostsResponse>(`tweets/${user?.uid}`)
            console.log(resp.data.data);
            setdata(resp.data.data)
        } catch (error) {
            console.log(error);
            
        }
        
        
    }

    useEffect(()=>{
        getTweets()
    },[])

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
            <BackgrundInformation user={user!} openModal={setModalVisible} />

            <FilterTweets filters={filter} />

            <Posts posts={data} />
            
        </ScrollView>
        <ModalUsers modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}

export default ProfileScreen