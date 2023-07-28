import React, { useState } from 'react'
import { IPost, PostsResponse } from '../interface/postInterface'
import tweeterApi from '../api/apiTweeter'

export const usePost = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setdata] = useState<IPost[]>([])

    async function getTweets(idUser: string){
        try {

            setIsLoading(true)
            const resp = await tweeterApi.get<PostsResponse>(`tweets/${idUser}`)
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
