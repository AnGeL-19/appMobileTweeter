import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const StatusTweet = () => {
  return (
    <View style={{
        position: 'absolute',
        top: 60,
        right: -100,
        width: 250,
        // height: 100,
        zIndex: 999,
    }}>
        <View style={{
            position: 'relative',
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 8,
            flexDirection: 'column',
            gap: 5
        }}>
            <Text style={{color: '#4F4F4F'}}>Who can reply?</Text>
            <Text>Choose who can reply to this Tweet.</Text>
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    padding: 10,
                }}
            >
                <Icon name="globe-outline" size={20} color='#4F4F4F' />
                <Text>Everyone</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    padding: 10,
                }}
            >
                <Icon name="people" size={20} color='#4F4F4F' />
                <Text>People you follow</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default StatusTweet