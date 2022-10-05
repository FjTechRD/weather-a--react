import { useEffect, useState } from "react";

import mist from "../assets/img/drizzle.jpg";
import foggy from "../assets/img/foggy.jpg";
import rainy from "../assets/img/rainy.jpg";
import snow from "../assets/img/snow.jpg";
import sunny from "../assets/img/sunny.jpg";
import thunderstorm from "../assets/img/thunderstorm.jpg";
import standard from "../assets/img/standarBG.jpg";
import App from "../App.jsx";

const useChangerBackground = () => {
  const [bgChanger, setBgChanger] = useState();

  useEffect((changer) => {
    switch (changer) {
      case "http://openweathermap.org/img/wn/01d@2x.png" ||
        "http://openweathermap.org/img/wn/01n@2x.png":
        setBgChanger({ backgroundImage: `url(${sunny})` });
        break;

      case "http://openweathermap.org/img/wn/02d@2x.png" ||
        "http://openweathermap.org/img/wn/02n@2x.png":
        setBgChanger({ backgroundImage: `url(${foggy})` });
        break;

      case "http://openweathermap.org/img/wn/03d@2x.png" ||
        "http://openweathermap.org/img/wn/03n@2x.png":
        setBgChanger({ backgroundImage: `url(${foggy})` });
        break;

      case "http://openweathermap.org/img/wn/04d@2x.png" ||
        "http://openweathermap.org/img/wn/04n@2x.png":
        setBgChanger({ backgroundImage: `url(${foggy})` });
        break;

      case "http://openweathermap.org/img/wn/09d@2x.png" ||
        "http://openweathermap.org/img/wn/09n@2x.png":
        setBgChanger({ backgroundImage: `url(${rainy})` });
        break;

      case "http://openweathermap.org/img/wn/10d@2x.png" ||
        "http://openweathermap.org/img/wn/10d@2x.png":
        setBgChanger({ backgroundImage: `url(${rainy})` });
        break;

      case "http://openweathermap.org/img/wn/11d@2x.png" ||
        "http://openweathermap.org/img/wn/11n@2x.png":
        setBgChanger({ backgroundImage: `url(${thunderstorm})` });
        break;

      case "http://openweathermap.org/img/wn/13d@2x.png" ||
        "http://openweathermap.org/img/wn/13n@2x.png":
        setBgChanger({ backgroundImage: `url(${snow})` });
        break;

      case "http://openweathermap.org/img/wn/50d@2x.png" ||
        "http://openweathermap.org/img/wn/50n@2x.png":
        setBgChanger({ backgroundImage: `url(${mist})` });
        break;

      default:
        setBgChanger({ backgroundImage: `url(${standard})` });
        break;
    }
  }, []);

  return { bgChanger };
};

export default useChangerBackground;
