import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native';
import Header from '../components/Header';
import CreateTweet from '../components/CreateTweet';
import Posts from '../components/post/Posts';
import { IPost, PostsResponse } from '../interface/postInterface';
import tweeterApi from '../api/apiTweeter';

const HomeScreen = () => {

  
  const [data, setdata] = useState<IPost[]>([])

    async function getTweets(){
        try {
            const resp = await tweeterApi.get<PostsResponse>('tweets/')
            console.log(resp.data.data);
            setdata(resp.data.data)
        } catch (error) {
            console.log(error);
            
        }
        
        
    }

    useEffect(()=>{
      getTweets()
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

        <Posts posts={data} />
        
      </ScrollView>
    </View>
  )
}

export default HomeScreen