import React, { useState } from 'react'
import { IPost, PostsResponse } from '../interface/postInterface'
import tweeterApi from '../api/apiTweeter'

interface Props{
    url?: string;
    id?: string;
}

export const usePost = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setdata] = useState<IPost[]>([])

    async function getTweets({id='', url=''}:Props){
        try {

            setIsLoading(true)
            setdata([])
            const resp = await tweeterApi.get<PostsResponse>(`tweets/${url}${id}`)
            console.log(resp.data.data);
            setdata(resp.data.data)
            setIsLoading(false)

        } catch (error) {
            console.log(error);
            
        }
        // PONER LOS DATOS NUEVOS
        
    }

    return {
        getTweets,
        isLoading,
        data
    }
}
