import React from "react";
import { Card, Button } from "react-bootstrap";

const Post3 = () => {
  return (
    <Card>

      <Card.Img
        variant="top"
        src="https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png"
        height={250}
      />

      <Card.Body>

        <Card.Title>Algorithm</Card.Title>

        <Card.Text>
          Algorithms are step-by-step procedures used for solving
          computational problems efficiently.
        </Card.Text>

        <Button variant="primary">
          Read More
        </Button>

      </Card.Body>

    </Card>
  );
};

export default Post3;