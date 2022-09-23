import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState } from "react";
function ListItem({index}) {

  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div 
      className="listItem" 
      style={{left: isHovered && index * 255 - 50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src="https://occ.a.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRw7FfohMIMQzNcqxE7xkOIeo48XEvdd35Y4PNG136GIoSP7qqQhMUQe4y0kBbnd3q1X_dk3WyXl5mLk_4ishmJ-e6frRoSwk3Go.jpg?r=634" 
          alt="" 
        />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />  
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOutlinedIcon className="icon" />
                <ThumbDownOutlinedIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>2 hours 26 mins</span>
                <span className="limit">R</span>
                <span>1990</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Qui pariatur mollitia sapiente nemo aspernatur corporis, accusamus impedit aperiam distinctio. 
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
    </div>
  );
}

export default ListItem