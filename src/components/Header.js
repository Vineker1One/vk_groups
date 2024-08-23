import React, { useState } from "react";
import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "./vk_logo.png";

const Header = ({ onDomainChange }) => {
  const [domain, setDomain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (domain) {
      onDomainChange(domain);
    }
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="30"
            width="60"
            className="d-inline-block align-top"
            alt="Logo"
          />{" "}
          VK Groups{" "}
        </Navbar.Brand>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Введите домен группы"
            className="me-2"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <Button variant="outline-info" type="submit">
            Показать посты
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;