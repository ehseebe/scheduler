export function getAppointmentsForDay(state, name) {
  const foundDay = state.days.filter((day) => day.name === name)[0];

  //console.log("???", foundDay)

  const output = foundDay
    ? foundDay.appointments.map((id) => state.appointments[id])
    : [];

  //console.log("OUTPUT", output)

  return output;
}

export function getInterview(state, interview) {
  
  if (!interview){
    return null;
  }

  //needs to return object with id, name, avatar
  const interviewerId = interview.interviewer
  console.log("!!!!!!", interviewerId)
  const output = {
    student: interview.student,
    interviewer: state.interviewers
  }
  console.log("???", output)
  return output

}
