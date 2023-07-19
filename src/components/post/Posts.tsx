import React from 'react'
import { Text, View } from 'react-native'
import Post from './Post';

const Posts = () => {

    const posts = [0,1,2,3,4]

  return (
    <View style={{
        flexDirection: 'column',
        gap: 20
    }}>
        {
            posts.map(post => (
                <Post key={post} />
            ))
        }
    </View>          
  )
}

export default Posts