import React from "react";
import DayListItem from "./DayListItem";
const classNames = require('classnames');

export default function DayList(props) {

  const loopDayList = props.days.map(day => {
    return (
      <ul>
      <DayListItem
      key={day.id}
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={props.setDay}
      />
      </ul>
    );
  });

  return loopDayList;

}