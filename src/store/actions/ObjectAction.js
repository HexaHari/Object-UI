import axios from "axios";

const API_DEV_URL = "https://api.restful-api.dev/objects";

export const fetchObjects = () => {
    return async (dispatch) => {
        const res = await axios.get(API_DEV_URL);
        dispatch({ 
            type: "OBJECT_FETCH", 
            payload: res.data 
        });
    };
};

export const addObject = (body) => {
    return async (dispatch) => {
        const res = await axios.post(API_DEV_URL, body);
        dispatch({
             type: "OBJECT_ADD", 
             payload: res.data 
            });
    };
};

export const deleteObject = (id) => {
    return async (dispatch) => {
        await axios.delete(API_DEV_URL + "/" + id);
        dispatch({ 
            type: "OBJECT_DELETE", 
            payload: id 
        });
    };
};