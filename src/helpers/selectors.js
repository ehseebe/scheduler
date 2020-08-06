export function getAppointmentsForDay(state, name) {
  const foundDay = state.days.filter((day) => day.name === name)[0];

  // console.log("???", foundDay)

  const output = foundDay
    ? foundDay.appointments.map((id) => state.appointments[id])
    : [];

  // console.log("APPTS FOR DAY", output)

  return output;
}

export function getInterview(state, interview) {
  
  if (!interview){
    return null;
  }

  //needs to return object with id, name, avatar
  const interviewerId = interview.interviewer
  
  //console.log("!!!!!!", interviewerId)
  
  const output = {
    student: interview.student,
    interviewer: state.interviewers[interviewerId]
  }
  
  //console.log("???", output)
  return output

}

export function getInterviewersForDay(state, day) {

  const foundInterviewer = state.days.filter((item) => item.name === day)[0];

  // console.log("FoundInterviewer", foundInterviewer)

  const output = foundInterviewer
    ? foundInterviewer.interviewers.map((interviewer) => state.interviewers[interviewer])
    : [];

  // console.log("OUTPUT", output)
  return output;

}
