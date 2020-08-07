import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  const setDay = (day) => setState({ ...state, day });
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);
  
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    return axios.put(`/api/appointments/${id}`, appointment)
    .then((res) => {
      setState(
        {
          ...state,
          appointments,
        });
    });
  };
  
  const cancelInterview = (id) => {
    //subtract that appointment for that day spots--
    //keep track of the day of the item to be deleted
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    //array
    const days = [...state.days]
    //array
    const today = state.days.find(day => day.appointments.includes(id))
    console.log("DAYS", days)
    console.log("TODAY", today)


    //declaring days
    //day state, find day, --
  
    return axios.delete(`/api/appointments/${id}`)
    .then((res) => {
      setState(
        {
          ...state,
          appointments,
          days
        },
        []
      );
    });
  };

  return { state, setDay, bookInterview, cancelInterview };

}

