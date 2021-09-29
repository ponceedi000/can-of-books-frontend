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
    // we need: onChange, onClick,
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
                <Form.Control onChange={(event) => this.setState({ status: event.target.value })} type="name" placeholder="Enter 'read' or 'unread'" />
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
            <Button onClick={this.props.handleClose} variant="primary">Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      // <Form onSubmit={this.handleSubmit}>
      //   <Form.Group className="mb-3" controlId="formTitle">
      //     <Form.Label>Title</Form.Label>
      //     <Form.Control onChange={(event) => this.setState({ title: event.target.value })} type="name" placeholder="Enter title of book" />
      //   </Form.Group>
      //   <Form.Group className="mb-3" controlId="formDescription">
      //     <Form.Label>Description</Form.Label>
      //     <Form.Control onChange={(event) => this.setState({ description: event.target.value })} type="name" placeholder="Enter book description" />
      //   </Form.Group>
      //   <Form.Group className="mb-3" controlId="formStatus">
      //     <Form.Label>Status</Form.Label>
      //     <Form.Control onChange={(event) => this.setState({ status: event.target.value })} type="name" placeholder="Enter 'read' or 'unread'" />
      //   </Form.Group>
      //   <Form.Group className="mb-3" controlId="formEmail">
      //     <Form.Label>Email</Form.Label>
      //     <Form.Control onChange={(event) => this.setState({ email: event.target.value })} type="name" placeholder="Enter your email" />
      //   </Form.Group>

      //   <Button onClick={this.props.handleSubmit} variant="primary" type="submit" value="sumbit">
      //     Submit Book
      //   </Button>
      // </Form>
    )
  }
}

export default BookFormModal;
