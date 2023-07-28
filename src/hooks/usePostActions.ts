import React, { useState } from 'react'
import tweeterApi from '../api/apiTweeter';
import { ActionResponse } from '../interface/postInterface';

type idType = {
    idTweet?: string,
    idComment?: string
}

export const usePostActions = () => {
  
    const [isLoading, setIsLoading] = useState(true)
    const [data, setdata] = useState<ActionResponse>({msg:'',ok:false})

    async function actionTweet(url: string, id: idType){
        try {
            
            console.log(id.idTweet, id.idComment, id);

            setIsLoading(true)
            const resp = await tweeterApi.put<ActionResponse>(`tweet/${url}`, {
                ...id
            })
            console.log(resp.data);
            setdata(resp.data)
            setIsLoading(false)

        } catch (error) {
            console.log(error.response.data);
            
        }
        
    }


    return {
        data,
        isLoading,
        actionTweet
    }
}
