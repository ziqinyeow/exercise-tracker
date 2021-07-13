import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Container>
      <InnerContainer>
        <Logo>
          <h1>Exercise</h1>
        </Logo>
        <Nav>
          <Link to="/">
            <h1>List</h1>
          </Link>
          <Link to="/create">
            <h1>Create Exercise</h1>
          </Link>
          <Link to="/user">
            <h1>Create User</h1>
          </Link>
        </Nav>
      </InnerContainer>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 10vh;

  h1 {
    font-size: 20px;
    font-weight: 200;
  }
`;

const InnerContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
