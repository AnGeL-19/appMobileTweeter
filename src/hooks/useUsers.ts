import React, { useState } from 'react'
import { AuthResponse, User } from '../interface/authInterface';
import tweeterApi from '../api/apiTweeter';
import { IUserFollow, IUsersResponse } from '../interface/followInterface';

export const useUsers = () => {

    const [users, setUsers] = useState<IUserFollow[]>([])
    const [isLoading, setIsLoading] = useState(true)
    
    async function getUsers(url: string = ''){
        try {
            setIsLoading(true)
            setUsers([])
            // console.log(`user${url}`);
            
            const resp = await tweeterApi.get<IUsersResponse>(`user${url}`)
            setUsers(resp.data.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error.response.data);
            
        }

    }


    return {
        users,
        getUsers,
        isLoading,
        setUsers
    }
}
