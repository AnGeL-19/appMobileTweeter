import React, { useState } from 'react'
import {  View,  KeyboardAvoidingView, Platform, Text } from 'react-native';
import Retweet from './Retweet';
import Profile from '../Profile';
import ImagePost from './ImagePost';
import DetailPost from './DetailPost';
import Comments from './Comments';
import PostActions from './PostActions';
import InputPost from './InputPost';
import { IPost } from '../../interface/postInterface';
import { useForm } from '../../hooks/useForm';


interface Props{
    post: IPost
}

const Post = ({post}:Props) => {

    const [detailPost, setDetailPost] = useState({
        likes: post.likes,
        nLikes: post.nLikes,
        comments: post.comentPeople,
        nComments: post.nComentPeople,
        retweet: post.retweets,
        nRetweets: post.nRetweets,
        saved: post.saved,
        nSaved: post.nSaved
    })
    const [showInput, setShowInput] = useState(false)

    

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
                    <Profile user={post.userTweet} dateTweet={post.date}  />
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
                    comments={detailPost.nComments} 
                    retweets={detailPost.nRetweets}
                    likes={detailPost.nLikes}
                    saved={detailPost.nSaved}
                />

                {/* interactive */}
                <PostActions
                    idTweet={post.tid} 
                    detailPost={detailPost} 
                    setDetailPost={setDetailPost}
                    setShowInput={setShowInput} 
                    showInput={showInput} 
                />

                {/* input/image text */}
                {
                    showInput
                    &&
                    <InputPost idTweet={post.tid} />
                }               
                
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