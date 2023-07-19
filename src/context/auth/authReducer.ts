

import { User } from '../../interface/authInterface';
import { AuthState } from './AuthProvider'

type AuthActionType =
| { type: '[Auth] - Login', payload: {user: User, token: string} }
| { type: '[Auth] - Register', payload: {user: User, token: string} }
| { type: '[Auth] - Logout'}
| { type: '[Auth] - Add Error', payload: string}
| { type: '[Auth] - Remove Error'}
| { type: '[Auth] - NotAuthenticated'}

export const AuthReducer = (state: AuthState, action: AuthActionType): AuthState => {
    switch (action.type) {
        case '[Auth] - Register':
        case '[Auth] - Login':
            return {
                ...state,
                errorMessage: '',
                user: action.payload.user,
                token: action.payload.token,
                status: 'authenticated' 
            }
        case '[Auth] - Logout':
        case '[Auth] - NotAuthenticated':
            return {
                ...state,
                errorMessage: '',
                user: null,
                token: null,
                status: 'not-authenticated'
            }
        case '[Auth] - Add Error':
            return {
                ...state,
                errorMessage: action.payload,
                user: null,
                token: null,
                status: 'not-authenticated'
            }
        case '[Auth] - Remove Error':
            return {
                ...state,
                errorMessage: '',
            }
        default:
            return state;

    }
}