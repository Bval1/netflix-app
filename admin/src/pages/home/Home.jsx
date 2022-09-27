import Chart from "../../components/charts/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import WidgetLarge from "../../components/widgetLarge/WidgetLarge"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import { userData } from "../../dummyData"
import "./home.css"

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" dataKey="Active User" grid/>
        <div className="homeWidgets">
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}
