import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as patch from 'redux/accion';

function Auth(login:boolean,user:any){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(patch.setSesion(login));
        dispatch(patch.setUser(JSON.parse(user)));
    }, [])
    return null
}

export default Auth
