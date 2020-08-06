export function getAppointmentsForDay(state, name) {

  const foundDay = state.days
    .filter((day) => day.name === name)[0];

  return foundDay
    ? foundDay.appointments
      .map((id) => state.appointments[id])
    : [];
}
