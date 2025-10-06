import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AboutUs.css";

function AboutUs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5002/api/about") // ✅ backend port 5002
      .then((res) => setData(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="AboutUs-container">
      <h1 className="AboutUs-title">{data.title}</h1>
      {data.text.map((p, i) => (
        <p className="AboutUs-text" key={i}>{p}</p>
      ))}
      <div className="AboutUs-imageWrapper">
        <img 
          src={data.image} 
          alt="About Us" 
          className="AboutUs-image"
        />
      </div>
    </div>
  );
}

export default AboutUs;
