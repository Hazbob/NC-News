import { useEffect, useState } from "react";
import { getWeather } from "../api.jsx";
function Weather() {
  const [geoSupp, setGeoSupp] = useState(true);
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [temp, setTemp] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  function success(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, () => {
      console.log("error");
    });
  } else {
    setGeoSupp(false);
  }

  useEffect(() => {
    getWeather(lat, long).then((data) => {
      console.log(data.data.current.condition.icon);
      setTemp(data.data.current.temp_c);
      setWeatherIcon(data.data.current.condition.icon);
    });
  }, [lat, long]);

  return (
    <div
      style={{
        display: "flex",
        width: "10%",
        alignItems: "center",
        backgroundColor: "#EFEFEF",
        height: "fit-content",
        margin: "1rem 0",
        padding: "0 1rem",
        justifyContent: "space-between",
        borderRadius: "5px",
      }}
    >
      <h1>{temp}&#176;c</h1>
      <img src={weatherIcon} alt="" />
    </div>
  );
}

export default Weather;
