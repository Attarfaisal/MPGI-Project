import React from "react";
import '../Assets/CSS/Homepage.css';
import Corousel from "../Components/Corousel";

const HomePage = () => {
  return (
    <div>
        <Corousel />
      <div className="vission">
        <h1>Vission</h1>
        <p>
          To become the center of excellence in Mechanical Engineering
          discipline with strong research and application based teaching
          beneficial to contribute well being of industry and society.
        </p>
      </div>
      <div className="mission">
        <h1>Mission</h1>
        <p>
          To provide quality education and generate future leaders in the field
          of Mechanical Engineering through a rigorous curriculum. <br/>To promote
          teaching and learning process resulting in research that is
          distinguished by its impact on academia, industry & society.
        </p>
      </div>
      
    </div>
  );
};

export default HomePage;
