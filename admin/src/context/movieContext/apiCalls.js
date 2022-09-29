import { createMovieFailure, createMovieStart, createMovieSuccess, 
    deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, 
    getMoviesStart, getMoviesSuccess, updateMovieFailure, updateMovieStart, updateMovieSuccess } from "./MovieActions"
import axios from "axios"

// get
export const getMovies = async (dispatch) =>{
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(getMoviesSuccess(res.data))
    } catch (error) {
        dispatch(getMoviesFailure());
    }
}

// create
export const createMovie = async (movie, dispatch) =>{
    dispatch(createMovieStart());
    try {   
        const res = await axios.post("/movies/", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(createMovieSuccess(res.data))
    } catch (error) {
        dispatch(createMovieFailure());
    }
}


// update -- TODO
export const updateMovie = async (movie, dispatch) =>{
    dispatch(updateMovieStart());
    try {   
        const res = await axios.put("/movies/", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(updateMovieSuccess(res.data))
    } catch (error) {
        dispatch(updateMovieFailure());
    }
}


// delete
export const deleteMovie = async (id, dispatch) =>{
    dispatch(deleteMovieStart());
    try {   // don't need a response since we're just deleting
        await axios.delete("/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFailure());
    }
}