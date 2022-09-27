import "./sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <HomeIcon className="sidebarIcon" />
                            Home
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AssessmentOutlinedIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">          
                        <li className="sidebarListItem active">
                            <PersonOutlineOutlinedIcon className="sidebarIcon" />
                            Users
                        </li>
                    </Link>
                    <Link to="/products" className="link"> 
                        <li className="sidebarListItem">
                            <StorefrontOutlinedIcon className="sidebarIcon"/>
                            Products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoneyOutlinedIcon className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChartIcon className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MailOutlineIcon className="sidebarIcon" />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <GradingOutlinedIcon className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineOutlinedIcon className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <WorkOutlineOutlinedIcon className="sidebarIcon" />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <AssessmentOutlinedIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportGmailerrorredIcon className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
