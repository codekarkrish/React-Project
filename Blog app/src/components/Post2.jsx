import React from "react";
import { Card, Button } from "react-bootstrap";

const Post2 = () => {
  return (
    <Card>

      <Card.Img
        variant="top"
        src="https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png"
        height={250}
      />

      <Card.Body>

        <Card.Title>Data Structure</Card.Title>

        <Card.Text>
          Data structures help organize and store data efficiently
          for faster access and modification.
        </Card.Text>

        <Button variant="primary">
          Read More
        </Button>

      </Card.Body>

    </Card>
  );
};

export default Post2;