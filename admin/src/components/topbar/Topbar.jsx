import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin App</span>

            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    < NotificationsIcon />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    < LanguageIcon />
                </div>
                <div className="topbarIconContainer">
                    < SettingsIcon />
                </div>
                <img src="https://static.wikia.nocookie.net/villains/images/6/66/1990-goodfellas-billy-bates-frank-vincent.jpg/" alt="" className="topAvatar" />
            </div>
        </div>
        
    </div>
  )
}
