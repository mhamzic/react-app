import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../services/apiService";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    list("courses", (data) => {
      setCourses(data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className='mb-5'>Courses</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Course name</th>
            <th>Points</th>
            <td>
              <Link className="btn btn-success btn-sm" to="/courses/0">
                Add New
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.points}</td>
              <td>
                <Link className="btn btn-secondary btn-sm" to={`/courses/${c._id}`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
