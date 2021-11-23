import React from "react";
import "./About.css";
import award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?cs=srgb&dl=pexels-md-iftekhar-uddin-emon-403495.jpg&fm=jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          quibusdam laudantium neque quidem recusandae unde.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem
          aliquid a nam consectetur necessitatibus ducimus ipsum, minus cumque
          dignissimos libero amet quis doloribus quia repellat saepe numquam,
          accusantium unde.
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Award</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nam
              explicabo exercitationem fuga cupiditate?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
