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
export function setContract(contract: any){
    return{
        type: action.CONTRACT,
        payload: contract
    }
}
export function setModal(modal: any){
    return{
        type: action.MODAL,
        payload: modal
    }
}

export function setProperty(property: any){
    return{
        type: action.PROPERTY,
        payload: property
    }
}