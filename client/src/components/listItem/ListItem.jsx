import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
});

function ListItem({index, item}) {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axiosInstance.get("/movies/find/" + item, 
          {
            headers:{
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
          });
          setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie()
  }, [item]);



  return (
    <Link to="/watch" state={{movie: movie}}>
      <div 
        className="listItem" 
        style={{left: isHovered && index * 255 - 50 + index * 2.5}}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={movie.imgTitle}
            alt="" 
          />
          {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop />  
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrowIcon className="icon" />
                  <AddIcon className="icon" />
                  <ThumbUpOutlinedIcon className="icon" />
                  <ThumbDownOutlinedIcon className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">
                  {movie.desc}
                </div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )}
      </div>
    </Link>
  );
}

export default ListItem