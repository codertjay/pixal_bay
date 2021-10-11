import axios from 'axios';
import * as actionTypes from './actionTypes';

export const projectUrlStart = () => {
    return {
        type: actionTypes.PROJECTURL_START,
        loading: true
    }
}

export const projectUrlSuccess = projectUrl => {
    return {
        type: actionTypes.PROJECTURL_SUCCESS ,
         loading: false,
        projectUrl
    }
}

export const projectUrlFail = err => {
    return {
        type: actionTypes.PROJECTURL_FAIL ,
        error: err,
        loading:false,
    }
}


export const projectUrlAnonymous = (username,id) => {
    return dispatch => {
        dispatch (projectUrlStart ());
        console.log ('user list  being called')
        axios.defaults.headers = {
            "Content-Type": "application/json" ,

        };
        console.log ('the username and id',username,id)
        axios.post(`http://127.0.0.1:8000/projectUrl/projecturl_anonymous/`,  {
            username: username ,
            id: id
        })
            .then (res => {
                console.log ('project url ' , res.data)
                const projectUrl = res.data
                dispatch (projectUrlSuccess (projectUrl));
            })
            .catch (err => {
                console.error (err)
                console.log (err)
                dispatch (projectUrlFail (err))
            })
    }
}
