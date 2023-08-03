import React, { useEffect, useState } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native';
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
    <View>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginTop: 80}}></View>
        
        <CreateTweet />

        {
          isLoading
          ? <ActivityIndicator size={'large'} color={'black'} />
          : <Posts posts={data} />
        }
        
        
      </ScrollView>
    </View>
  )
}

export default HomeScreen