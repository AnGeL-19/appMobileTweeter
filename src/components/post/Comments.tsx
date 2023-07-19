import React from 'react'
import { View } from 'react-native'
import Comment from './Comment'

const Comments = () => {
  return (
    <View
        style={{
            flexDirection: 'column',
            gap: 15,
            borderTopWidth: 1,
            borderColor: '#F2F2F2',
            paddingTop: 15
        }}
    >
        {/* comment */}
        <Comment/>

    </View>
  )
}

export default Comments