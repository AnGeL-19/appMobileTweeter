import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const PostActions = () => {
  return (
    <View
        style={{
            paddingVertical: 5,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#F2F2F2',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
            marginBottom: 15,
        }}
    >
        <TouchableOpacity
            style={{
                paddingHorizontal: 25,
                paddingVertical: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon name="chatbox-outline" size={25}  />
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                paddingHorizontal: 25,
                paddingVertical: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon name="refresh-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                paddingHorizontal: 25,
                paddingVertical: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon name="heart-outline" size={25} style={{
                fontWeight: 'bold',
            }} />
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                paddingHorizontal: 25,
                paddingVertical: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon name="bookmark-outline" size={25} />
        </TouchableOpacity>
    </View>
  )
}

export default PostActions