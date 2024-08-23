import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <div className="media m-5 d-flex align-items-center">
              <img width={150} height={150} className="me-3" src="./Components/vk_logo.png" alt="post"/>
              <div className="media-body">
                <h5>Blog post</h5>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
