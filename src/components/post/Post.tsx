import React from 'react'
import {  View,  KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Retweet from './Retweet';
import Profile from '../Profile';
import ImagePost from './ImagePost';
import DetailPost from './DetailPost';
import Comments from './Comments';
import PostActions from './PostActions';
import InputPost from './InputPost';

const Post = () => {


  return (
    <View style={{
        width: '100%', 
        paddingHorizontal: 10
    }}>

        {/* Tweet */}
        <View>
            {/* retweet */}
            <Retweet />

            {/* info tweet - photo, description, interections */}
            <View 
                style={{
                    backgroundColor: 'white',
                    padding: 15,
                    borderRadius: 10
                }}
            >

                {/* profile */}
                <View style={{
                    marginBottom: 10
                }}>
                    <Profile  />
                </View>
                

                {/* image */}
                <ImagePost />

                {/* caracteristics post */}
                <DetailPost />

                {/* interactive */}
                <PostActions />

                {/* input/image text */}
                <InputPost />
                
                {/* comments */}
                <Comments />
            </View>

        </View>

    </View>
  )
}

export default Post