import React, { useState, useEffect, useMemo } from "react";
import axios from "axios"
import Chart from "../../components/charts/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import WidgetLarge from "../../components/widgetLarge/WidgetLarge"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import { userData } from "../../dummyData"
import "./home.css"

const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
});

export default function Home() {
  // memo hook to signify to react that this array wont change
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    ], []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
      const getStats = async () => {
        try {
          const res = await axiosInstance.get("/users/stats", {
            headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmUxZTE5ZTAxMDhhNTY4MDZmZGM2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDIyNzQ1NCwiZXhwIjoxNjY0NjU5NDU0fQ.g144XYq_LL4U1t02i8vD65LTl_PGVGWvnoADT5x3V9A"
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        statsList.map((item) => 
          setUserStats((prev) => [
            ...prev, {
              name: MONTHS[item._id - 1],  
              "New User": item.total
            },
          ])
        );

        } catch (error) {
          console.log(error);
        }
    };
    getStats();
    
  }, [MONTHS]);

  
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" dataKey="New User" grid/>
        <div className="homeWidgets">
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}
