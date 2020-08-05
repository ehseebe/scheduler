import React from 'react';

const getAppointmentsForDay = (state, name) => {
  const filteredDays = state.days.filter(day => day.name === name);
  return filteredDays;
}

export default getAppointmentsForDay;