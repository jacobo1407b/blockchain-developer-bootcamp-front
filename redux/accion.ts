import * as action from './type';

export function setUser(user: any){
    return{
        type: action.USER,
        payload: user
    }
}

export function setSesion(sesion: boolean){
    return{
        type: action.SESION,
        payload: sesion
    }
}