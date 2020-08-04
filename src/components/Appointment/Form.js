import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";


const Form = props => {
  const [name, setName] = useState(props.name || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
      setName('');
      setInterviewer(null);
      // props.onSave();
  }

  const cancel = () => {
    reset()
    props.onCancel();
  }

  // const myChangeHandler = (event) => {
  //   this.setName({name: event.target.value})
  // }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={props.setName}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={props.setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={reset}>Save</Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
