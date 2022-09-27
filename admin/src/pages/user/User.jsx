import "./user.css"
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" 
                    alt="" 
                    className="userShowImg" 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Jon Snow</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <AccountBoxOutlinedIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">jonsnow99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarMonthOutlinedIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">01/01/1970</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <SmartphoneOutlinedIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">+1 212 584 8745</span>
                    </div>
                    <div className="userShowInfo">
                        <AlternateEmailOutlinedIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">jonsnow@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationOnOutlinedIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">New York, NY</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                            type="text" 
                            placeholder="jonsnow99" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input 
                            type="text" 
                            placeholder="Jon Snow" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input 
                            type="text" 
                            placeholder="+1 212 584 8745" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                            type="text" 
                            placeholder="jonsnow@gmail.com" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                            type="text" 
                            placeholder="New York, NY" 
                            className="userUpdateInput" 
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img 
                            src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png"
                            alt=""
                            className="userUpdateImg"
                            />
                            <label htmlFor="file">
                                <FileUploadOutlinedIcon className="userUpdateIcon" />
                            </label>
                            <input type="file" id="file" style={{display: "none" }} />
                        </div> 
                        <button className="userUpdateButton">Update</button>   
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}
