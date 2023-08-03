import React, { useEffect } from 'react'
import { ScrollView, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import Header from '../components/Header'
import Posts from '../components/post/Posts'
import FilterTweets from '../components/profile/FilterTweets'
import { usePost } from '../hooks/usePost'

const SaveScreen = () => {

  const { data, getTweets, isLoading } = usePost()

    useEffect(()=>{
      getTweets({url: '/saved'})
      console.log('entraaaaa');
      
    },[])

  const filter = [
    {
        name: 'tweets',
        status: true,
        text: 'Tweets',
        url: `/saved`,
    },
    {
        name: 'tweetsReplies',
        status: false,
        text: 'Tweets & Replies',
        url: '',
    },
    {
        name: 'media',
        status: false,
        text: 'Media',
        url: '',
    },
    {
        name: 'likes',
        status: false,
        text: 'Likes',
        url: `/liked`,
    },
]




  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />

      {/* 
      {
        isLoading
        ? <ActivityIndicator size={'small'} color='black' />
        : 
      } */}
        <Posts posts={data} 
        isLoading={isLoading}
        headerComponents={
        <>
        <View style={{marginTop: 80}}></View>
        <FilterTweets filters={filter} getTweets={getTweets} />
        </>}/>
     
      


    </SafeAreaView>
  )
}

export default SaveScreen