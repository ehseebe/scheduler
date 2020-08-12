import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {
  const theDays = props.days;
  return theDays.map((day, index) => (
    <DayListItem
      key={index}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={(event) => props.setDay(day.name)}
    />
  ));
};

export default DayList;
