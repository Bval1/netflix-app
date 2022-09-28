import "./widgetSmall.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import axios from "axios";
export default function WidgetSmall() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmUxZTE5ZTAxMDhhNTY4MDZmZGM2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDIyNzQ1NCwiZXhwIjoxNjY0NjU5NDU0fQ.g144XYq_LL4U1t02i8vD65LTl_PGVGWvnoADT5x3V9A"
                    },
                });

                setNewUsers(res.data);
                
            } catch (error) {
                console.log(error)
            }

        };

        getNewUsers();
    }, [])
    
  return (
    <div className="widgetSmall">
        <span className="widgetSmallTitle"> New Users</span>
        <ul className="widgetSmallList">
            {newUsers.map((user) => (

                <li className="widgetSmallListItem">
                    <img 
                    src= {user.profilePic || "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"}
                    alt=""
                    className="widgetSmallImg"/>
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityIcon className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
