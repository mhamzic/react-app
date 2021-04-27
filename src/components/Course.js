import React, { useState, useEffect } from "react";
import { insert, update, read, remove } from "../services/apiService";

function Course({ match, history }) {
  const [id] = useState(match.params.id);
  const [course, setCourse] = useState({
    _id: "0",
    name: "",
    points: 0,
  });

  useEffect(() => {
    if (id !== "0") {
      read("courses", id, (data) => {
        if (data) setCourse(data);
      });
    }
  }, [id]);

  function changeHandler(e) {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const back = () => {
    history.push("/courses");
  };

  const save = () => {
    if (id === "0") {
      if (course.name === "") {
        alert("Please enter Course name");
        return;
      }

      if (course.points === "0" || course.points < 1) {
        alert("Course points must be greater than 0");
        return;
      }

      insert("courses", course, (data) => {
        if (data) return history.push("/courses");
        console.log("There was error during saving the data.");
      });
    } else {
      if (course.name === "") {
        alert("Please enter Course name");
        return;
      }

      if (course.points === "0" || course.points < 1) {
        alert("Course points must be greater than 0");
        return;
      }
      update("courses", id, course, (data) => {
        if (data) return history.push("/courses");
        console.log("There was error during saving the data.");
      });
    }
  };

  const del = () => {
    remove("courses", id, (data) => {
      history.push("/courses");
    });
  };

  return (
    <div className="container">
      <h2 className="mb-5">Course</h2>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Course name:</label>
          <input type="text" className="form-control" name="name" value={course.name} onChange={changeHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="points">Course points:</label>
          <input type="text" className="form-control" name="points" value={course.points} onChange={changeHandler} required />
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
          <button type="submit" className="btn btn-outline-primary" onClick={save}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Course;
