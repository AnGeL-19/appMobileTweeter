import React from 'react'
import { ScrollView, Text, TouchableOpacity, View,TextInput } from 'react-native';
import Header from '../components/Header';
import Posts from '../components/post/Posts';
import FilterTweets from '../components/profile/FilterTweets';
import  Icon  from 'react-native-vector-icons/Ionicons';

const ExploreScreen = () => {

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

      <View style={{marginTop: 80}}></View>

      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          marginBottom: 15
        }}
      >
        <View style={{
          flex: 1,
          padding: 10,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10,
        }}>

          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
          }}>
            <Icon name="search-outline" size={25} />
            <TextInput
              placeholder='Search'
              style={{
                flex:1,
                fontSize: 18,
                paddingEnd: 10
              }}
            />
          </View>
          
          <TouchableOpacity
                  style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  paddingHorizontal: 20,
                  backgroundColor: '#2F80ED',
                  borderRadius: 5,
                  }}
              >
                  <Text style={{
                  color: 'white',
                  fontWeight: '500'
                  }}>Tweet</Text>
          </TouchableOpacity>
        </View>
      </View>
      



      <FilterTweets filters={filter} />

      <Posts />


      </ScrollView>
    </View>
  )
}

export default ExploreScreen