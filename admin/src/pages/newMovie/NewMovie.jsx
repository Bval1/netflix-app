import { useContext, useState } from "react"
import storage from "../../firebase"
import "./newMovie.css"
import { ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import { createMovie } from "../../context/movieContext/apiCalls";
import {MovieContext} from "../../context/movieContext/MovieContext"
import { useNavigate } from "react-router-dom";


export default function NewMovie() {
    const [movie, setMovie] = useState(null)
    const [imgTitle, setImgTitle] = useState(null)
    const [imgSmall, setImgSmall] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)
    const [uploaded, setUploaded] = useState(0);
    
    const {dispatch} = useContext(MovieContext)
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({...movie, [e.target.name]: value});
    };
    
    const upload = (items) => {
        items.forEach(item => {
            const fileName = new Date().getTime() + item.label +  item.file.name;
            const storageRef = ref(storage, `/items/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);
      
            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + " % done");
                }, 

                (err) => {console.log(err)}, 

                () => {
                    //uploadTask.snapshot.ref.
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        setMovie((prev) => {
                            return {...prev, [item.label]: url};
                        });
                        setUploaded(prev => prev + 1);
                    });
                }
            ); 
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            {file: imgTitle, label: "imgTitle"},
            {file: imgSmall, label: "imgSmall"},
            {file: trailer, label: "trailer"},
            {file: video, label: "video"},
        ]);
    };

    //console.log(movie);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        createMovie(movie, dispatch);
        navigate("/movies");
    }

  return (
    <div className="newProduct">
    <h1 className="addProductTitle">New Movie</h1>
    <form className="addProductForm">
        <div className="addProductItem">
            <label>Title Image</label>
            <input 
            type="file" 
            id="imgTitle" 
            name="imgTitle" 
            onChange={e=>setImgTitle(e.target.files[0])}
            />
        </div>
        <div className="addProductItem">
            <label>Thumbnail Image</label>
            <input 
            type="file" 
            id="imgSmall" 
            name="imgSmall"
            onChange={e=>setImgSmall(e.target.files[0])}
             />
        </div>
        <div className="addProductItem">
            <label>Title</label>
            <input type="text" placeholder="Movie Title" name="title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Description</label>
            <input type="text" placeholder="Description" name="desc" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Genre</label>
            <input type="text" placeholder="Genre" name="genre" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Year</label>
            <input type="text" placeholder="Year" name="year" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Limit</label>
            <input type="text" placeholder="Limit" name="limit" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
            <label>Is Series?</label>
            <select name="isSeries" id="isSeries" onChange={handleChange}>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
        </div>
        <div className="addProductItem">
            <label>Trailer</label>
            <input 
            type="file" 
            name="trailer"
            onChange={e=>setTrailer(e.target.files[0])}
            />
        </div>
        <div className="addProductItem">
            <label>Video</label>
            <input type="file" 
            name="video"
            onChange={e=>setVideo(e.target.files[0])}
            />
        </div>
        {uploaded === 4 ? (
            <button className="addProductButton" onClick={handleSubmit}>Create</button>) : 
            (<button className="addProductButton" onClick={handleUpload}>Upload</button> 
            )}
    </form>
</div>
  )
}
