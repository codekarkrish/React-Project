import React from "react";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

const BlogNav = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#A3C1D4" }}
    >
      <Container>

        <Navbar.Brand
          href="/"
          className="d-flex align-items-center text-white"
        >
          <img
            src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
            height="30"
            alt="logo"
          />

          <span className="ms-2">GeeksforGeeks</span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">

          <Nav className="me-3">

            <Nav.Link href="/" className="text-white">
              JavaScript
            </Nav.Link>

            <Nav.Link href="/" className="text-white">
              Data Structure
            </Nav.Link>

            <Nav.Link href="/" className="text-white">
              Algorithm
            </Nav.Link>

            <Nav.Link href="/" className="text-white">
              Computer Network
            </Nav.Link>

          </Nav>

          <Form>
            <FormControl
              type="search"
              placeholder="Search"
            />
          </Form>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default BlogNav;