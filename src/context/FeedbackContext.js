import { useState, createContext } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is Feedback Review 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is Feedback Review 2",
      rating: 8,
    },
    {
      id: 3,
      text: "This is Feedback Review 3",
      rating: 6,
    },
  ]);

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the feedback ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleAdd = (newFeedback) => {
    newFeedback.id = Math.random() * 100000 + 1;
    setFeedback([newFeedback, ...feedback]);
  };

  const handleEdit = (item) => {
    if (window.confirm("Do you want to update the feedback ?")) {
      setEditFeedback({
        item,
        edit: true,
      });
    }
  };

  const updateFeedback = (id, updFeedback) => {
    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return { ...item, ...updFeedback };
        } else {
          return item;
        }
      })
    );
    setEditFeedback({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        handleDelete,
        handleAdd,
        handleEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
