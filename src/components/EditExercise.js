import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditExercise() {
  const { id } = useParams();
  const history = useHistory();
  const [users, setUsers] = useState({});
  const { register, handleSubmit, error } = useForm();

  const onSubmit = (data) => {
    const exercise = {
      username: users.username,
      description: data.description,
      duration: data.duration,
      date: data.date,
    };
    console.log(exercise);
    axios
      .post(`http://localhost:5000/exercises/update/${id}`, exercise)
      .then((res) => console.log(res.data));

    history.push("/");
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/exercises/${id}`).then((res) => {
      setUsers({
        username: res.data.username,
        description: res.data.description,
        duration: res.data.duration,
        date: res.data.date,
      });
    });
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Username: {users.username}</h1>
        <input
          type="text"
          {...register("description")}
          placeholder={users.description}
        />
        <input
          type="text"
          {...register("duration")}
          placeholder={users.duration}
        />
        <input type="date" {...register("date")} />
        <button type="submit">submit</button>
      </form>
    </Container>
  );
}

export default EditExercise;

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
