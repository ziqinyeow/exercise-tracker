import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function ExercisesList() {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/exercises").then((res) => {
      console.log(res.data);
      setExercise((prev) => {
        return [...prev, ...res.data];
      });
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/exercises/${id}`).then((res) => {
      console.log(res.data);
    });

    setExercise((prev) => {
      return prev.filter((e) => e._id !== id);
    });
  };

  return (
    <Container>
      <InnerContainer>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          {exercise.map((e, i) => (
            <tbody key={i}>
              <tr>
                <td>{e.username}</td>
                <td>{e.description}</td>
                <td>{e.duration}</td>
                <td>{e.date.substring(0, 10)}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/edit/${e._id}`}
                  >
                    Edit
                  </Link>{" "}
                  |{" "}
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="#"
                    onClick={() => handleDelete(e._id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </InnerContainer>
    </Container>
  );
}

export default ExercisesList;

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 95%;

  table {
    width: 100%;
    text-align: center;
    /* display: flex;
    align-items: center;
    justify-content: space-around; */
  }
`;
