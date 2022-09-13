import React from "react";
import Card from "../shared/card";
import propTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { handleDelete } = useContext(FeedbackContext);
  const { handleEdit } = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <FaEdit
        className="edit"
        color="purple"
        onClick={() => handleEdit(item)}
      />
      <FaTimes
        onClick={() => handleDelete(item.id)}
        className="close"
        color="purple"
      />
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
};

export default FeedbackItem;
