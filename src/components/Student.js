import React, { useState, useEffect } from "react";
import { insert, update, read, remove } from "../services/apiService";

function Student({ match, history }) {
  const [id] = useState(match.params.id);
  const [student, setStudent] = useState({
    _id: "0",
    firstName: "",
    lastName: "",
    yearOfBirth: 0,
  });

  useEffect(() => {
    if (id !== "0") {
      read("students", id, (data) => {
        if (data) setStudent(data);
      });
    }
  }, [id]);

  function changeHandler(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  const back = () => {
    history.push("/students");
  };

  const save = () => {
    if (id === "0") {
      insert("students", student, (data) => {
        if (data) return history.push("/students");
        console.log("There was error during saving the data.");
      });
    } else {
      update("students", id, student, (data) => {
        if (data) return history.push("/students");
        console.log("There was error during saving the data.");
      });
    }
  };

  const del = () => {
    remove("students", id, (data) => {
      history.push("/students");
    });
  };

  return (
    <div className="container">
      <h2 className="mb-5">Student</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First name:</label>
          <input type="text" className="form-control" name="firstName" value={student.firstName} onChange={changeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" className="form-control" name="lastName" value={student.lastName} onChange={changeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="yearOfBirth">Birth year:</label>
          <input type="text" className="form-control" name="yearOfBirth" value={student.yearOfBirth} onChange={changeHandler} />
        </div>
        <div className="d-flex justify-content-end">
          {id !== "0" && (
            <button type="button" className="btn btn-danger mr-2" onClick={del}>
              Delete
            </button>
          )}
          <button type="button" className="btn btn-outline-secondary mr-2" onClick={back}>
            Back
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={save}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Student;
