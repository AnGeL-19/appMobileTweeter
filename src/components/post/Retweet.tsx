import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props{
  username: string;
}

const Retweet = ({username}:Props) => {
  return (
    <View style={styles.container}>
        <Icon name='refresh-outline' size={20}/>
        <Text style={styles.text}>{username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 16, 
    fontWeight: '400'
  }
}) 

export default Retweet