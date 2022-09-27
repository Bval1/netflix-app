import "./widgetSmall.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSmall() {
  return (
    <div className="widgetSmall">
        <span className="widgetSmallTitle"> New Join Members</span>
        <ul className="widgetSmallList">
            <li className="widgetSmallListItem">
                <img src="https://static.wikia.nocookie.net/villains/images/6/66/1990-goodfellas-billy-bates-frank-vincent.jpg" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">John Doe</span>
                    <span className="widgetSmallUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmallButton">
                    <VisibilityIcon className="widgetSmallIcon" />
                    Display
                </button>
            </li>

            <li className="widgetSmallListItem">
                <img src="https://static.wikia.nocookie.net/villains/images/6/66/1990-goodfellas-billy-bates-frank-vincent.jpg" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">John Doe</span>
                    <span className="widgetSmallUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmallButton">
                    <VisibilityIcon className="widgetSmallIcon" />
                    Display
                </button>
            </li>

            <li className="widgetSmallListItem">
                <img src="https://static.wikia.nocookie.net/villains/images/6/66/1990-goodfellas-billy-bates-frank-vincent.jpg" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">John Doe</span>
                    <span className="widgetSmallUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmallButton">
                    <VisibilityIcon className="widgetSmallIcon" />
                    Display
                </button>
            </li>

            <li className="widgetSmallListItem">
                <img src="https://static.wikia.nocookie.net/villains/images/6/66/1990-goodfellas-billy-bates-frank-vincent.jpg" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">John Doe</span>
                    <span className="widgetSmallUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmallButton">
                    <VisibilityIcon className="widgetSmallIcon" />
                    Display
                </button>
            </li>

            <li className="widgetSmallListItem">
                <img src="https://static.wikia.nocookie.net/villains/images/6/66/1990-goodfellas-billy-bates-frank-vincent.jpg" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">John Doe</span>
                    <span className="widgetSmallUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmallButton">
                    <VisibilityIcon className="widgetSmallIcon" />
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
