export function getAppointmentsForDay(state, name) {
  const foundDay = state.days.filter((day) => day.name === name)[0];

  const output = foundDay
    ? foundDay.appointments.map((id) => state.appointments[id])
    : [];

  return output;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerId = interview.interviewer;

  const output = {
    student: interview.student,
    interviewer: state.interviewers[interviewerId],
  };

  return output;
}

export function getInterviewersForDay(state, day) {
  const foundInterviewer = state.days.filter((item) => item.name === day)[0];

  const output = foundInterviewer
    ? foundInterviewer.interviewers.map(
        (interviewer) => state.interviewers[interviewer]
      )
    : [];

  return output;
}
