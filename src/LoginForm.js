import { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class LoginForm extends Component {

  handleSubmit = (event) =>{
    event.preventDefault();
    const bookUser = {
      userName: event.target.formBasicUsername.value,
      email: event.target.formBasicEmail.value,
    }
    this.props.loginHandler(bookUser);
  }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll always share your email with anyone who asks nicely.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
};

export default LoginForm;
