import "./movie.css"
import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext"


export default function Movie() {
    const location = useLocation();
    const movie = location.state.movie;
    //console.log(location)

    const navigate = useNavigate();
    const {dispatch} = useContext(MovieContext)
    const [imgTitle, setImgTitle] = useState(null)
    const [imgSmall, setImgSmall] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)
    const [uploaded, setUploaded] = useState(0);

    const [updatedInfo, setInfo] = useState(null)


    const handleChange = (e) => {
        const value = e.target.value;
        setInfo({...updatedInfo, [e.target.name]: value});
    };
    
    const upload = (items) => {
        console.log(items)

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
                        setInfo((prev) => {
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

    console.log(updatedInfo);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovie(movie, updatedInfo, dispatch);
        navigate("/movies");
    }

  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Movie</h1>
            <Link to="/newMovie">
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={movie.imgTitle}
                    alt="" 
                    className="productInfoImg" 
                    />
                    <span className="productName">{movie.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">{movie._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">genre</span>
                        <span className="productInfoValue">{movie.genre}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">year</span>
                        <span className="productInfoValue">{movie.year}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">limit</span>
                        <span className="productInfoValue">{movie.limit}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Movie Title</label>
                    <input type="text" placeholder={movie.title} name="title" onChange={handleChange} />
                    <label>Description</label>
                    <input type="text" placeholder={movie.desc} name="desc" onChange={handleChange} />
                    <label>Genre</label>
                    <input type="text" placeholder={movie.genre} name="genre" onChange={handleChange}/>
                    <label>Year</label>
                    <input type="text" placeholder={movie.year} name="year" onChange={handleChange}/>
                    <label>Limit</label>
                    <input type="text" placeholder={movie.limit} name="limit" onChange={handleChange}/>
                    <label>Trailer</label>
                    <input type="file" placeholder={movie.trailer} name="trailer" onChange={e=>setTrailer(e.target.files[0])} />
                    <label>Video</label>
                    <input type="file" placeholder={movie.video} name="video" onChange={e=>setVideo(e.target.files[0])} />
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <label>Title Image</label>
                        <img src={movie.imgTitle}
                        alt="" 
                        className="productUploadImg" 
                        />
                        <label htmlFor="file">
                            <FileUploadOutlinedIcon className="movieUpdateIcon" />
                        </label>
                        <input type="file" 
                        id="file" 
                        name="imgSmall" 
                        onChange={e=>setImgTitle(e.target.files[0])}
                        style={{display: "none"}} 
                        />

                        <label>Thumbnail Image</label>
                        <img src={movie.imgSmall}
                        alt="" 
                        className="productUploadImg" 
                        />
                        <label htmlFor="file2">
                            <FileUploadOutlinedIcon className="movieUpdateIcon" />
                        </label>
                        <input type="file" 
                        id="file2" 
                        name="imgSmall" 
                        onChange={e=>setImgSmall(e.target.files[0])}
                        style={{display: "none"}} 
                        />
                    </div>
                    {uploaded === 4 ? (
                    <button className="productButton" onClick={handleSubmit}>Update Info, Video, and Images</button>) : 
                    (<button className="productButton" onClick={handleUpload}>Upload</button>)
                    }
                    <button className="productButton" onClick={handleSubmit}>Update Info</button>
                </div>
            </form>

        </div>
    </div>
  )
}
