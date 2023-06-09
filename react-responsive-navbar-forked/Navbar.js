import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: #007dbe;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: white;
  position: relative;

  /* @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: start;
  } */
`;

const NavLink = styled(Link)`
  /* font-size: 0.9rem; */
  text-decoration: none;
  position: relative;
  color: inherit;
  padding: 0.5em;
  margin: 0.5em 0.5em;
  /* font-weight: ${(props) => (props.selected ? "bold" : "normal")}; */

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 1px;
    left: 0;
    width: ${(props) => (props.selected ? "100%" : "0%")};
    height: 2px;
    background: white;
    transition: width 0.5s;
  }
  &:hover {
    /* font-weight: bold; */
  }
  &:hover:after {
    width: 100%;
  }
`;

const Navbar = ({ match }) => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/post">Post</NavLink>
      <NavLink to="/create">Create</NavLink>
    </Nav>
  );
};

export default Navbar;
