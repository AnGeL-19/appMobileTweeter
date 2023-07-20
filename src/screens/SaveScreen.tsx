import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header from '../components/Header'
import Posts from '../components/post/Posts'
import FilterTweets from '../components/profile/FilterTweets'

const SaveScreen = () => {


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
    <View style={{
        // flex: 1,
        // marginTop: 70
    }}>
      <Header />
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
      <View style={{marginTop: 80}}></View>
      <FilterTweets filters={filter} />

      {/* <Posts /> */}

      </ScrollView>
    </View>
  )
}

export default SaveScreen