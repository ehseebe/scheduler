import React, { useState, useEffect } from "react";
import DayList from "./DayList";
import "components/Application.scss";
import "components/Appointment";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
const axios = require("axios").default;


export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {
      "1": {
        id: 1,
        time: "12pm",
        interview: null
      }
    },
    interviewers: {}
  });

  const [interviewer, setInterviewer] = useState({
    interviewer: "Sylvia Palmer",
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"), 
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")])
      .then(
        (all) => {
          // console.log("DAYS", all[0].data)
          //console.log("APPTS", all[1].data)
          // console.log("INTERVIEWERS", all[2].data)
          setState((prev) => ({
            ...prev,
            days: all[0].data, 
            appointments: all[1].data,
            interviewers: all[2].data
        }));
      }
    );
  }, []);

const bookInterview = (id, interview) => {
    console.log(id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview}
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, appointment)
      .then((res) => {
        setState({ 
          ...state,
          appointments }, [])
        console.log("????", interview)
      })
  }

// const cancelInterview = (id, interview) => {

// }


  const appointments = getAppointmentsForDay(state, state.day);

  const interviewers = getInterviewersForDay(state, state.day);

  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
  
    return (
      <Appointment
        key={appointment.id}
        {...appointment}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
      />
    );
  });


  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <ul>
            <DayList 
            days={state.days} 
            day={state.day} 
            setDay={setDay} 
            />
          </ul>
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
      {schedule} 
        <Appointment key='last' time='5pm'/>
      </section>
    </main>
  );
}
