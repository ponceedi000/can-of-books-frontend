import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

class BookFormModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: '',
      email: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)

    this.props.onCreate({
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
      email: this.state.email,
    })
  }

  render() {
    return (
      <>
        <Button onClick={this.props.handleShow}>
          Add a Book
        </Button>
        <Modal show={this.props.showModal}>
          <Modal.Header>
            <Modal.Title>Add a Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(event) => this.setState({ title: event.target.value })} type="name" placeholder="Enter title of book" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(event) => this.setState({ description: event.target.value })} type="name" placeholder="Enter book description" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control onChange={(event) => this.setState({ status: event.target.value })} type="name" placeholder="Enter 'read' or 'unread'" as="select">
                  <option></option>
                  <option value="5 STARS">5 of 5 Stars</option>
                  <option value="4 STARS">4 of 5 Stars</option>
                  <option value="3 STARS">3 of 5 Stars</option>
                  <option value="2 STARS">2 of 5 Stars</option>
                  <option value="1 STAR">1 of 5 Stars</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(event) => this.setState({ email: event.target.value })} type="name" placeholder="Enter your email" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit} variant="primary" type="submit" value="sumbit">Submit
            </Button>
            <Button onClick={this.props.handleClose} variant="secondary">Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default BookFormModal;
