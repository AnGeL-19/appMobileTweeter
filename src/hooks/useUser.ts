import React, { useState } from 'react'
import { AuthResponse, User } from '../interface/authInterface';
import tweeterApi from '../api/apiTweeter';

export const useUser = (userInit: User) => {

    const [user, setUser] = useState<User>(userInit)
    const [isLoading, setIsLoading] = useState(true)
    
    async function getUser(idUser: string){
        try {
            setIsLoading(true)
            const resp = await tweeterApi.get<AuthResponse>(`user/${idUser}`)
            setUser(resp.data.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            
        }

    }

    const setUserData = (user: User) => {
        setIsLoading(true) 
        setUser(user)
        setIsLoading(false)
    }

    return {
        user,
        getUser,
        isLoading,
        setUserData
    }
}
