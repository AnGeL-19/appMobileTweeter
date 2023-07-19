import React, { useContext } from 'react'
import { View, Text, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/auth/AuthProvider';
import Header from '../components/Header';
import Profile from '../components/Profile';
import CreateTweet from '../components/CreateTweet';
import Posts from '../components/post/Posts';

const HomeScreen = () => {

  const { user } = useContext(AuthContext)

  return (
    <View>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginTop: 80}}></View>
        
        <CreateTweet />

        <Posts />
      </ScrollView>
    </View>
  )
}

export default HomeScreen