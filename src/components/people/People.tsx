import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { IPost } from '../../interface/postInterface';
import { ActivityIndicator } from 'react-native';
import { IUserFollow } from '../../interface/followInterface';
import User from './User';

interface Props{
    users: IUserFollow[];
    headerComponents?: React.ComponentType<any> | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    isLoading?: boolean;
}

const People = ({users,headerComponents,isLoading}:Props) => {

    console.log('entra', '------------');
    

  return (
    <View style={{
        flexDirection: 'column',
        gap: 20
    }}>
        <FlatList
            data={users}
            refreshing={isLoading}
            ListEmptyComponent={<ActivityIndicator animating={isLoading} color="black" size="large" />}
            keyExtractor={(item)=>item.uid+item}
            ListHeaderComponent={headerComponents}
            renderItem={({item})=> <User user={item} />}
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

export default People