import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Post from './Post';
import { IPost } from '../../interface/postInterface';

interface Props{
    posts: IPost[];
}

const Posts = ({posts}:Props) => {

    console.log('entra', '------------');
    

  return (
    <View style={{
        flexDirection: 'column',
        gap: 20
    }}>
        {/* CAMBIAR A FLATLIST */}
        <FlatList
            data={posts}
            keyExtractor={(item)=>item.tid}
            renderItem={({item})=> <Post post={item} />}
            ItemSeparatorComponent={()=>(
                <View style={{padding:10}}></View>
            )}
            showsVerticalScrollIndicator={false}
        />
    </View>          
  )
}

export default Posts