export function getAppointmentsForDay(state, name) {

  const foundDay = state.days
    .filter((day) => day.name === name)[0];
  
    console.log("???", foundDay)

  const output = foundDay
    ? foundDay.appointments
      .map((id) => state.appointments[id])
    : [];
  
    console.log("OUTPUT", output)

  return output
}

export function getInterview(state, interview) {

}
