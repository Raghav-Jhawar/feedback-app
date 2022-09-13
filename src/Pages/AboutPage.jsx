import React from "react";
import Card from "../shared/card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h2>About this Project</h2>
        <p>This is a react app to give take your feedback about the product</p>
        <p>version 1.0.0</p>
        <Link to="/">Back to Home Page</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
