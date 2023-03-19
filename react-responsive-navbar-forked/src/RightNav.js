import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation, useRouteMatch } from "react-router";

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin: 0;
  position: relative;

  @media (max-width: 400px) {
    /* border: 2px solid red; */
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #007dbe;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    /* transform: translateX(0); */
    top: 0;
    right: 0;
    height: 100vh;
    overflow: auto;
    /* width: 300px; */
    width: 50%;
    /* padding-top: 3.5rem; */
    transition: width 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 500px) {
    width: 75%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const ListItem = styled(Link)`
  text-decoration: none;
  padding: 5px;
  /* margin-right: 10px; */
  margin: 10px;
  color: white;
  font-size: 1rem;
  position: relative;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 1px;
    left: 0;
    /* width: 0%; */
    width: ${(props) => (props.selected ? "100%" : "0%")};
    height: 2px;
    background: white;
    transition: width 0.5s;
  }
  &:hover:after {
    width: 100%;
  }
  @media (max-width: 400px) {
    margin: 0;
    padding: 0.5em 1.3em;
  }
`;

const RightNav = ({ open, closeNav }) => {
  const match = useRouteMatch();
  const location = useLocation();

  return (
    <UnorderedList open={open}>
      <ListItem>
        <form className="form-inline my-2 my-md-0">
          <input
            className="form-control bg-transparent text-white"
            type="text"
            pattern="[0-9]*"
            placeholder="Search"
          />
        </form>
      </ListItem>
      <ListItem
        to="/"
        selected={location.pathname === "/" ? true : false}
        onClick={closeNav}
      >
        Home
      </ListItem>
      <ListItem
        to="/post"
        selected={location.pathname === "/post" ? true : false}
        onClick={closeNav}
      >
        Post
      </ListItem>
      <ListItem
        to="/create"
        selected={location.pathname === "/create" ? true : false}
        onClick={closeNav}
      >
        Create
      </ListItem>
    </UnorderedList>
  );
};

export default RightNav;
