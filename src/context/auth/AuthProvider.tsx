
import React, { FC, ReactNode, useReducer, createContext, useEffect }  from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthResponse, Login, Register, User } from '../../interface/authInterface';

import { AuthReducer } from './authReducer';
import tweeterApi from '../../api/apiTweeter';

interface ContextProps{
    errorMessage: string;
    token: string | null;
    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (data:Register) => void;
    signIn: (data:Login) => void;
    signOut: () => void;
    removeError: () => void;
}

export const AuthContext = createContext({} as ContextProps);


export interface AuthState{
    errorMessage: string;
    token: string | null;
    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
}

export const Auth_INITIAL_STATE: AuthState = {
    errorMessage: '',
    token: null,
    user: null,
    status: 'checking' 
}

interface Props{
    children: ReactNode
}

export const AuthProvider: FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE)

    useEffect(() => {
        chekingToken()
    }, [])
    
    const chekingToken = async () => {


        const token = await AsyncStorage.getItem('token')
        if (!token) {
            dispatch({type: '[Auth] - NotAuthenticated'})   
        }
        
        try {

            const resp = await tweeterApi.get<AuthResponse>('/login/renew')
            console.log(resp.data);
            dispatch({type: '[Auth] - Login', payload: {
                user: resp.data.data,
                token: resp.data.token
            }})
            AsyncStorage.setItem('token', resp.data.token)

        } catch (error) {
            console.log(error);
            dispatch({type: '[Auth] - NotAuthenticated'})
            // if (!error.response) return console.log('Server Error!');
            // if (error.response.data.msg) return console.log(error.response.data.msg);
            // if (error.response.data.errors.email.msg) {
            //     console.log(error.response.data.errors.email.msg);
            // }
            
        }
    }


    const signUp = async (data:Register) => {
        try {
            
            const resp = await tweeterApi.post<AuthResponse>('/login/new',data)
            console.log(resp.data);
            dispatch({type: '[Auth] - Register', payload: {
                user: resp.data.data,
                token: resp.data.token
            }})
            AsyncStorage.setItem('token', resp.data.token)

        } catch (error) {

            if (!error.response) return dispatch({type: '[Auth] - Add Error', payload: 'Server Error'})
            // if (error.response.data.msg) return dispatch({type: '[Auth] - Add Error', payload: error.response.data.msg})
            if (error.response.data.errors.email.msg) {
                dispatch({type: '[Auth] - Add Error', payload: error.response.data.errors.email.msg})
            }
            
        }
    }

    const signIn = async (data:Login) => {

        try {
            
            const resp = await tweeterApi.post<AuthResponse>('/login',data)
            console.log(resp.data);
            dispatch({type: '[Auth] - Login', payload: {
                user: resp.data.data,
                token: resp.data.token
            }})
            AsyncStorage.setItem('token', resp.data.token)

        } catch (error) {

            if (!error.response) return dispatch({type: '[Auth] - Add Error', payload: 'Server Error'})
            if (error.response.data.msg) return dispatch({type: '[Auth] - Add Error', payload: error.response.data.msg})
            if (error.response.data.errors.email.msg) {
                dispatch({type: '[Auth] - Add Error', payload: error.response.data.errors.email.msg})
            }
            
        }

    }

    const signOut = () => {
        dispatch({type: '[Auth] - Logout'})
        AsyncStorage.removeItem('token')
    }

    const removeError = () => {
        dispatch({type: '[Auth] - Remove Error'})
    }

return (
   <AuthContext.Provider value={{
        ...state,
        signUp,
        signIn,
        signOut,
        removeError,
   }}>
       { children }
  </AuthContext.Provider>
)
}