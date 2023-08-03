import React, { useEffect, useState } from 'react'
import { View, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import CreateTweet from '../components/CreateTweet';
import Posts from '../components/post/Posts';
import { IPost, PostsResponse } from '../interface/postInterface';
import tweeterApi from '../api/apiTweeter';
import { usePost } from '../hooks/usePost';

const HomeScreen = () => {

  const { data, getTweets, isLoading } = usePost()

    useEffect(()=>{
      getTweets({})
      console.log('entraaaaa');
      
    },[])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />

        <Posts posts={data} headerComponents={<><View style={{marginTop: 80}}></View><CreateTweet /></>} isLoading />
      
             
    </SafeAreaView>
  )
}

export default HomeScreen