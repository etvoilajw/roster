import { useState } from "react";

import classes from "./AddStaff.module.css";

const AddStaff = ({ roster, setRoster }) => {
  const [fullName, setFullName] = useState("");

  const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurdsay",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const defaultShift = DAYS.reduce(
    (days, value) => ({
      ...days,
      [value]: {
        workType: "",
        startHours: "",
        startMinutes: "",
        startAMPM: "",
        endHours: "",
        endMinutes: "",
        endAMPM: "",
      },
    }),
    {}
  );

  const addStaff = (e) => {
    e.preventDefault();
    if (fullName === "") {
      return;
    }
    if (Object.keys(roster).includes(fullName)) {
      alert("Staff already exists");
      return;
    }
    setRoster((prev) => ({
      ...prev,
      [fullName]: defaultShift,
    }));
    setFullName("");
  };

  return (
    <form onSubmit={addStaff} className={classes.formContainer}>
      <div className={classes.container}>
        <label className={classes.label} htmlFor={"Full name"}>
          Full name
        </label>
        <input
          className={classes.input}
          type={"text"}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder={"Enter full name"}
          required
        ></input>
        <button className={classes.button} type="submit">
          Add Staff
        </button>
      </div>
    </form>
  );
};

export default AddStaff;
