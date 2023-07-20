import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

interface Props{
  imagePost: string
}

const ImagePost = ({imagePost}:Props) => {
  return (
    <View style={styles.containerImage}>
        <Image 
        style={styles.image}
        source={{
            uri: imagePost
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerImage: {
    width: '100%',
    maxHeight: 200,
    overflow: 'hidden',
    borderRadius: 15,
    marginBottom: 15
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})

export default ImagePost
