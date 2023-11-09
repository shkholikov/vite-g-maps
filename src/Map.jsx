import { useState } from "react";
import "./App.css";

const maps = [
  {
    button: "Tashkent, Uzbekistan",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83987178953!2d69.1145576180004!3d41.28273794614595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sat!4v1699568321391!5m2!1sen!2sat",
  },
  {
    button: "Prague, Czech Republic",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163930.61388287804!2d14.300816794765668!3d50.059773405166766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPrague%2C%20Czechia!5e0!3m2!1sen!2sat!4v1699568392818!5m2!1sen!2sat",
  },
  {
    button: "Vienna, Austria",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170128.87924984956!2d16.21525119566552!3d48.220795893989155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sVienna%2C%20Austria!5e0!3m2!1sen!2sus!4v1699569178611!5m2!1sen!2sus",
  },
];

function Map() {
  const [currentMap, setCurrentMap] = useState(0);
  return (
    <>
      <div className="card">
        {maps.map((map, index) => {
          return (
            <button onClick={() => setCurrentMap(index)}>{map.button}</button>
          );
        })}
      </div>
      <h3>{maps[currentMap].button}</h3>
      <iframe
        width="800px"
        height="500px"
        style={{ border: "3px solid #646cffaa", borderRadius: "15px" }}
        src={maps[currentMap].src}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </>
  );
}

export default Map;
