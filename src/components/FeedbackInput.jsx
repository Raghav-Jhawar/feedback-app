import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Card from "../shared/card";
import Button from "../shared/Button";
import RadioSelect from "./RadioSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackInput = () => {
  const { handleAdd, editFeedback, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (text === "") {
      setDisable(true);
      setMessage(null);
    } else if (text.length >= 0 && text.length <= 10) {
      setDisable(true);
      setMessage("Please enter at least 10 characters");
    } else {
      setDisable(false);
      setMessage("You can now submit the feedback");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (editFeedback.edit === true) {
        updateFeedback(editFeedback.item.id, newFeedback);
      } else {
        handleAdd(newFeedback);
      }
      setText("");
    }
  };

  useEffect(() => {
    if (editFeedback.edit === true) {
      setText(editFeedback.item.text);
      setDisable(false);
    }
  }, [editFeedback]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service ?</h2>
        <RadioSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your feedback here !!"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={disable}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackInput;
