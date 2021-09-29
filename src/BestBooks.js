import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      displayBooks: false,
    }
  }
  async componentDidMount() {
    this.fetchBooks('brynthepigeon@gmail.com');

  }

  async fetchBooks(email) {
    // let booksURL = 'http://localhost:3001/books';
    let booksURL = 'https://kroffe-can-of-books.herokuapp.com/books'
    if (email) {
      booksURL += `?email=${email}`;
    }

    try {
      const response = await axios.get(booksURL);
      console.log(response.data)
      this.setState({
        books: response.data,
        displayBooks: true
      })

    } catch (error) {
      console.log(error);
    }
  }

  handleEmailSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log({ email });
    this.fetchBooks(email);

  }

  //WIP - commented out code is stuff that doesn't work yet, but we'll figure it out eventually.

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {
    /* TODO: render user's books in a Carousel */
    console.log('NEW BOOK',this.props.newBook)
    return (
      <>
      {this.state.books.length > 0 ? 
      <Carousel>
        {this.state.books.map((book, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/150"
              alt={book.title}
            />
            <Carousel.Caption>
              <h3>{book.title}</h3> {/*this doesn't work yet*/}
              <p>{book.description}</p> {/*this doesn't work yet*/}
            </Carousel.Caption>
          </Carousel.Item>

        ))}


      </Carousel>
      : <p>Sorry, no books available.</p>}
      </>
    )
  }
}
export default BestBooks;