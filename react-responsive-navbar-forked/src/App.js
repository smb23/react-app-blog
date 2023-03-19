import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { render } from "react-dom";

const Container = styled.div`
  /* border: 2px solid red; */
  margin: 100;
  padding: 100;
  box-sizing: border-box;
  font-family: sans-serif
 
}
`;

export default function App() {
  // const match = useRouteMatch();

  return (
    <BrowserRouter>
      <Container>
        <h2>Sam23</h2>

        <Navbar2 />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
const Home = () => {
  return (
    <h3>
      Hello! This is Sam from WD42P. Thank you to each and every one of you for
      visiting my first react page. I am very pleased to be able to welcome
      those of you that have been with me for a long time now as well as those
      who are new to the react universe
    </h3>
  );
};
const Post = () => {
  return (
    <div>
      <button>View</button>
    </div>
  );
};
const Create = () =>
  function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
