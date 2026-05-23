import React from "react";
import { Card, Button } from "react-bootstrap";

const Post4 = () => {
  return (
    <Card>

      <Card.Img
        variant="top"
        src="https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png"
        height={250}
      />

      <Card.Body>

        <Card.Title>Computer Network</Card.Title>

        <Card.Text>
          Computer networks allow devices to communicate and
          share resources using networking hardware and protocols.
        </Card.Text>

        <Button variant="primary">
          Read More
        </Button>

      </Card.Body>

    </Card>
  );
};

export default Post4;