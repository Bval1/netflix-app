import { useState } from "react"
import "./newMovie.css"

export default function NewMovie() {
    const [movie, setMovie] = useState(null)
    const [imgTitle, setImgTitle] = useState(null)
    const [imgSmall, setImgSmall] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)
    
    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({...movie, [e.target.name]: value});
    };

    console.log(imgTitle);
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
        <button className="addProductButton">Create</button>
    </form>
</div>
  )
}
