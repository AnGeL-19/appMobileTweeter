import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View,TextInput, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import Posts from '../components/post/Posts';
import FilterTweets from '../components/profile/FilterTweets';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useUsers } from '../hooks/useUsers';
import { usePost } from '../hooks/usePost';
import Search from '../components/Search';
import People from '../components/people/People';
import Post from '../components/post/Post';
import User from '../components/people/User';
import { IPost } from '../interface/postInterface';
import { IUserFollow } from '../interface/followInterface';

const ExploreScreen = () => {

  const { users, isLoading: isLoadingUsers , getUsers} = useUsers()
  const { data, getTweets, isLoading: isLoadingPosts } = usePost()

  const [valueInfo, setValueInfo] = useState<IPost[] | IUserFollow[]>([])

  const [showPeople, setShowPeople,] = useState(false)

  useEffect(()=>{
    

    getTweets({url: '/populates?filter=top'})
    console.log('entraaaaa');
    
  },[])

  useEffect(() => {
    // if (showPeople) {
    //   setValueInfo(users)
    //   console.log('poepleeeeeeeeeeeeee');
    setValueInfo([])
    // }else{
    //   setValueInfo(data)
    // }

    if (showPeople) {
      // setData([])
      setValueInfo(users)
    }else{
      // setUsers([])
      setValueInfo(data)
    }
    console.log(data,users);
    
    console.log('amonooooooooooooooooooooooooooooos');
    
  }, [data, users])
  

  const filter = [
    {
        name: 'top',
        status: true,
        text: 'Top',
        url: '/populates?filter=top',
        available: true,
    },
    {
        name: 'lastest',
        status: false,
        text: 'Lastest',
        url: '/populates?filter=lastest',
        available: true,
    },
    {
        name: 'media',
        status: false,
        text: 'People',
        url: `/people`,
        available: false,
    },
    {
        name: 'likes',
        status: false,
        text: 'Media',
        url: ``,
        available: true,
    },
  ]

  // console.log(data,'-------------------------<<<<<<<<<<<');
  

  return (
    <SafeAreaView>
      <Header />
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
      <Search />
      
      <View style={{paddingTop: 160}}></View>
      <FilterTweets filters={filter} getTweets={getTweets} getUsers={getUsers} setPeople={setShowPeople}/>


      {
        showPeople
        ? <People users={users} isLoading={isLoadingUsers} />

        : 
        <Posts posts={data} isLoading={isLoadingPosts} /> 
      }
      


      </ScrollView>
    </SafeAreaView>
  )
}

export default ExploreScreen