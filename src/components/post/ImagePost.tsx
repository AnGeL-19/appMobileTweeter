import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const ImagePost = () => {
  return (
    <View style={styles.containerImage}>
        <Image 
        style={styles.image}
        source={{
            uri: 'https://i.pinimg.com/564x/8e/9a/75/8e9a757df07a82914dfd03a470678faf.jpg'
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
