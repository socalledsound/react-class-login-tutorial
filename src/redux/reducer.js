import { UserActionTypes  } from './actionTypes'

const INITIAL_STATE = {
    currentUser: null,
    userInfo: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_USER_INFO :
            return {
                ...state,
                userInfo: action.payload,
                currentUser: action.payload.username
            }
        default: 
            return {
                ...state,
            }    
    }
}