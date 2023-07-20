import React from 'react'
import { View } from 'react-native'
import Comment from './Comment'
import { ComentPerson } from '../../interface/postInterface';
import { FlatList } from 'react-native-gesture-handler';

interface Props{
  comments: ComentPerson[];
}

const Comments = ({comments}:Props) => {
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
      {/* USAR FLATLIST */}
        {/* comment */}
        <FlatList
          data={comments}
          keyExtractor={(item)=>item.cid}
          renderItem={({item})=> <Comment comment={item} /> }
        />


    </View>
  )
}

export default Comments