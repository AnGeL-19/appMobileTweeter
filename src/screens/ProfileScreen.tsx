import React, { useContext, useEffect, useRef, useState } from 'react'
import {  ActivityIndicator, ScrollView, View } from 'react-native'
import Header from '../components/Header'
import { AuthContext } from '../context/auth/AuthProvider'
import BackgrundInformation from '../components/profile/BackgrundInformation'
import FilterTweets from '../components/profile/FilterTweets'
import Posts from '../components/post/Posts'
import ModalUsers from '../components/modal/ModalUsers'
import tweeterApi from '../api/apiTweeter'
import { IPost, PostsResponse } from '../interface/postInterface'
import { AuthResponse, User } from '../interface/authInterface'
import { StackScreenProps } from '@react-navigation/stack'
import { ProductsStackParams } from '../navigator/tabs/Tab'
import { usePost } from '../hooks/usePost'
import { useUser } from '../hooks/useUser'

interface Props extends StackScreenProps<ProductsStackParams, 'ProfileScreen'>{};

const ProfileScreen = ({route}:Props) => {

    const { user: userAuth } = useContext(AuthContext)

    const { data, getTweets, isLoading } = usePost()
    const { user: user, isLoading: isLoadingUser, getUser, setUserData } = useUser(userAuth!)
    

    const [modalVisible, setModalVisible] = useState(false)
    const [follow, setFollow] = useState<{follow: string, name: string, username: string}>({
        follow: '',
        name: '',
        username: '',
    })
 

    // https://app-tweet-backend-production.up.railway.app/api/user/followers/641a68dd8db1946fba68252b

    useEffect(()=>{
        
        if (route.params?.id && route.params?.id !== user?.uid) {
            getUser(route.params?.id)
            getTweets(route.params?.id)
        }else{
            setUserData(userAuth!)
            getTweets(userAuth?.uid!)
        }
    },[route.params?.id])

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
            
            {
                isLoadingUser
                ? <ActivityIndicator size={'large'} color={'black'}/>
                : <BackgrundInformation user={user!} openModal={setModalVisible} typeFollow={setFollow} />

            }

            <FilterTweets filters={filter} />

            {
                isLoading
                ? <ActivityIndicator size={'large'} color={'black'}/>
                : <Posts posts={data} />
            }
            
            
        </ScrollView>
        <ModalUsers follow={follow} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}

export default ProfileScreen