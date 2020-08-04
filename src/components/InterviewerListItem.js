import React from "react";
import "components/InterviewerListItem.scss";
const classNames = require('classnames');

// const interviewer = {
//   id: 1,
//   name: "Sylvia Palmer",
//   avatar: "https://i.imgur.com/LpaY82x.png",
// };

const InterviewerListItem = props => {
  let interviewerListClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  })

  return (
    <li className={interviewerListClass} onClick={() => props.setInterviewer(props.name)}>
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  );
};

export default InterviewerListItem;