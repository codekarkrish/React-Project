import React from "react";
import { Card, Button } from "react-bootstrap";

const Post1 = () => {
  return (
    <Card>

      <Card.Img
        variant="top"
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"
        height={250}
      />

      <Card.Body>

        <Card.Title>JavaScript</Card.Title>

        <Card.Text>
          JavaScript is the world's most popular lightweight,
          interpreted programming language. It is widely used
          for web development on both client and server side.
        </Card.Text>

        <Button variant="primary">
          Read More
        </Button>

      </Card.Body>

    </Card>
  );
};

export default Post1;