import React from 'react'
import {  View,  KeyboardAvoidingView, Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Retweet from './Retweet';
import Profile from '../Profile';
import ImagePost from './ImagePost';
import DetailPost from './DetailPost';
import Comments from './Comments';
import PostActions from './PostActions';
import InputPost from './InputPost';
import { IPost } from '../../interface/postInterface';

interface Props{
    post: IPost
}

const Post = ({post}:Props) => {

  return (
    <View style={{
        width: '100%', 
        paddingHorizontal: 10
    }}>

        {/* Tweet */}
        <View>
            {/* retweet */}
            {
                post?.userRetweet
                &&
                (
                <Retweet username={post.userRetweet} />
                )
            }
           

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
                    marginBottom: 10,
                }}>
                    <Profile user={post.userTweet}  />
                </View>
                
                <View
                    style={{
                        paddingVertical: 10
                    }}
                >
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600'
                    }}>
                        {post.description}
                    </Text>
                </View>

                {/* image */}
                {
                    post.imgTweet
                    &&
                    (
                        <ImagePost imagePost={post.imgTweet} />
                    )
                }
                

                {/* caracteristics post */}
                <DetailPost 
                    comments={post.nComentPeople} 
                    retweets={post.nRetweets}
                    saved={post.nSaved}
                />

                {/* interactive */}
                <PostActions />

                {/* input/image text */}
                <InputPost />
                
                {/* comments */}
                {
                    post.comentPeople.length > 0
                    &&
                    <Comments comments={post.comentPeople}/>
                }
                
            </View>

        </View>

    </View>
  )
}

export default Post