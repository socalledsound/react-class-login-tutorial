import { UserActionTypes  } from './actionTypes'

export const setUserInfo = (values) => ({
    type: UserActionTypes.SET_USER_INFO,
    payload: values
})