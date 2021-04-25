import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../services/apiService";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    list("students", (data) => {
      setStudents(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Year</th>
            <td>
              <Link to="/students/0">Add New</Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.yearOfBirth}</td>
              <td>
                <Link to={`/students/${student._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
