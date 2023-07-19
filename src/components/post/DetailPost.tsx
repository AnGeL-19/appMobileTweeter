import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailPost = () => {
  return (
    <View style={styles.container}>
        <Text>499 comments</Text>
        <Text>24k Retweets</Text>
        <Text>243 Saved</Text>
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