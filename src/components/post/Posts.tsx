import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Post from './Post';
import { IPost } from '../../interface/postInterface';
import { ActivityIndicator } from 'react-native';

interface Props{
    posts: IPost[];
    headerComponents?: React.ComponentType<any> | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    isLoading?: boolean;
}

const Posts = ({posts,headerComponents,isLoading}:Props) => {

    console.log('entra', '------------');
    

  return (
    <View style={{
        flexDirection: 'column',
        gap: 20
    }}>
        <FlatList
            data={posts}
            refreshing={isLoading}
            ListEmptyComponent={<ActivityIndicator animating={isLoading} color="black" size="large" />}
            keyExtractor={(item)=>item.tid+item.date}
            ListHeaderComponent={headerComponents}
            renderItem={({item})=> <Post post={item} />}
            ItemSeparatorComponent={()=>(
                <View style={{padding:10}}></View>
            )}
            ListFooterComponent={()=>(
                <View style={{marginBottom:50}}>
                    {/* <ActivityIndicator animating={isLoading} color="black" size="large" /> */}
                </View>
            )}
            
            showsVerticalScrollIndicator={false}
        />
    </View>          
  )
}

export default Posts