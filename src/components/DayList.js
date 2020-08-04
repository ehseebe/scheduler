import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {

  const loopDayList = props.days.map(day => {
    return (
      <ul>
      <DayListItem
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={(event) => props.setDay(day.id)}
      />
      </ul>
    );
  });

  return loopDayList;

}