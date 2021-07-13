import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";

function CreateExercise() {
  const history = useHistory();
  const [users, setUsers] = useState(["user"]);
  const { register, handleSubmit, error } = useForm();

  const onSubmit = (data) => {
    const exercise = {
      username: data.users,
      description: data.description,
      duration: data.duration,
      date: data.date,
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    history.push("/");
  };

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.length > 0) {
        res.data.map((user) => {
          return setUsers((prev) => [...prev, user.username]);
        });
      }
    });
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("users")}>
          {users.map((user, index) => (
            <option value={user} key={index}>
              {user}
            </option>
          ))}
        </select>
        <input
          type="text"
          {...register("description")}
          placeholder="Description"
        />
        <input type="text" {...register("duration")} placeholder="Duration" />
        <input type="date" {...register("date")} />
        <button type="submit">submit</button>
      </form>
    </Container>
  );
}

export default CreateExercise;

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 60%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  input,
  select,
  button {
    padding: 20px;
  }

  select {
    user-select: none;
  }

  button {
    cursor: pointer;
  }
`;
