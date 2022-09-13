import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  let Average =
    feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedback.length;

  Average = Average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Average Reviews : {isNaN(Average) ? 0 : Average}</h4>
    </div>
  );
};

export default FeedbackStats;
