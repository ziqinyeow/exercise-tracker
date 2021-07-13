import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import axios from "axios";

function CreateUser() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const user = {
      username: data.username,
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    e.target.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("username")} />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

export default CreateUser;

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 60%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  input,
  button {
    padding: 20px;
  }

  button {
    cursor: pointer;
  }
`;
