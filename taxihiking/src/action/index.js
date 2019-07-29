import * as types from './ActionTypes';

export function getStoreData(){
    return{
        type:types.GET_STOREDATA
    };
}
export function setStoreData(){
    return{
        type:types.SET_STOREDATA
    };
}
export function getLocation(){
    return{
        type:types.GET_LOCATION
    };
}
export function setLocation(){
    return{
        type:types.SET_LOCATION
    };
}