import axios from "axios";
import {store} from "../../index";

/*export const getData = (data) => ({
    type: 'GET_DATA',
    payload: data
});*/

export const edit = (data) => ({
    type: 'EDIT',
    payload: data
});

export const GET_DATA = 'GET_DATA';
export const getData = () => {
    return dispatch => {
        return axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                    dispatch({
                    type: GET_DATA,
                    payload: res.data
                })
            });
    }
};


