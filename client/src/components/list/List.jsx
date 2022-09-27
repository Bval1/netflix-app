import "./list.scss"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react";

function List({list}) {

    const [slideNumber, setSliderNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        
        if(direction === "left" && slideNumber > 0){
            setSliderNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction === "right" && slideNumber < 5){ // assumes only 10 items in list
            setSliderNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        //console.log(distance);
    }
  return (
    <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlinedIcon 
                className="sliderArrow left" 
                onClick={()=>handleClick("left")}
                style={{display: !isMoved && "none"}}
            />
            <div className="container" ref={listRef}>
                {list.content.map((item, index) => (
                    <ListItem index={index} item={item} /> 
                ))
                }
            </div>
            <ArrowForwardIosOutlinedIcon className="sliderArrow right"  
            onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List