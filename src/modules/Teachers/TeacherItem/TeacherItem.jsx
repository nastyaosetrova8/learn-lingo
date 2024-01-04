import React, { useState } from "react";
import { uid } from "react-uid";

const TeacherItem = ({
  name,
  surname,
  languages,
  levels,
  rating,
  reviews,
  price_per_hour,
  lessons_done,
  avatar_url,
  lesson_info,
  conditions,
  experience,
  id,
  onReadMore,
  onOpenModal,
  index,
}) => {
  const [expandedUserId, setExpandedUserId] = useState(null);

  const generateReviewsItems = () => {
    return reviews.map((item, index) => (
      <li key={index}>
        <div>Avatar</div>
        <p>{item.reviewer_name}</p>
        <p>{item.reviewer_rating}</p>
        <p>{item.comment}</p>
      </li>
    ));
  };

  const generateLevelItems = () => {
    return levels.map((item, index) => (
      <li key={index}>
        <p>{item}</p>
      </li>
    ));
  };

  const toggleExpandedUser = (id) => {
    // setExpandedUserId((prevId) => (prevId === id ? null : id));
    setExpandedUserId(id);
  };

  return (
    <div>
      <div>{avatar_url}</div>
      <p>Languages</p>
      <ul>
        <li>Lessons online</li>
        <li>Lessons done: {lessons_done}</li>
        <li>Rating: {rating}</li>
        <li>Price / 1 hour: {price_per_hour}&#128178;</li>
      </ul>

      <h2>
        {name}
        {surname}
      </h2>
      <p>Speaks: {languages}</p>
      <p>Lesson Info: {lesson_info}</p>
      <p>Conditions: {conditions}</p>

      {!expandedUserId && (
        <button type="button" onClick={() => toggleExpandedUser(id)}>
          Read more
        </button>
      )}
      {expandedUserId === id && (
        <>
          <p>{experience}</p>
          <ul>{generateReviewsItems()}</ul>

          <button type="button" id={id} onClick={onOpenModal}>
            Book trial lesson
          </button>
        </>
      )}
      <ul>{generateLevelItems()}</ul>
    </div>
  );
};

export default TeacherItem;
