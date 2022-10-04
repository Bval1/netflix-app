
import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, 
    getListsFailure, getListsStart, getListsSuccess } from "./ListActions";
import axios from "axios"


const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
  });

// get
export const getLists = async (dispatch) =>{
    dispatch(getListsStart());
    try {
        const res = await axiosInstance.get("/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(getListsSuccess(res.data))
    } catch (error) {
        dispatch(getListsFailure());
    }
}

// create
export const createList = async (list, dispatch) =>{
    dispatch(createListStart());
    try {   
        const res = await axiosInstance.post("/lists", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(createListSuccess(res.data))
    } catch (error) {
        dispatch(createListFailure());
    }
}


// // update -- TODO
// export const updateMovie = async (movie, dispatch) =>{
//     dispatch(updateMovieStart());
//     try {   
//         const res = await axiosInstance.put("/movies/", movie, {
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
//             },
//         });
//         dispatch(updateMovieSuccess(res.data))
//     } catch (error) {
//         dispatch(updateMovieFailure());
//     }
// }


// delete
export const deleteList = async (id, dispatch) =>{
    dispatch(deleteListStart());
    try {   // don't need a response since we're just deleting
        await axiosInstance.delete("/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(deleteListSuccess(id))
    } catch (error) {
        dispatch(deleteListFailure());
    }
}