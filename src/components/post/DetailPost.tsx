import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props{
  comments: number;
  retweets: number;
  saved: number;
  likes: number;
}

const DetailPost = ({ likes ,comments, retweets, saved}:Props) => {
  return (
    <View style={styles.container}>
        <Text>{comments} comments</Text>
        <Text>{retweets} Retweets</Text>
        <Text>{likes} Likes</Text>
        <Text>{saved} Saved</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginBottom: 15
  },

})

export default DetailPost