import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      // displayBooks: false,
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  async componentDidMount() {
    const booksURL = process.env.REACT_APP_API_URL + '/books'; // localhost
    //let booksURL = 'https://kroffe-can-of-books.herokuapp.com/books' //heroku
    console.log(booksURL, 'url here?');

    // const bookResponse = await axios.get(booksURL);
    // this.setState({ books: bookResponse.data });
    this.getbooks();
  }


  handleDelete = async (id, email) => {

    // let newBooks = this.state.books;
    // const superNewBooks = newBooks.filter(book => book._id !== id)
    // this.setState({
    //   books: superNewBooks
    // })
    await axios.delete(`http://localhost:3001/books/${id}?email=${email}`);
    this.getbooks();
  };
  getbooks = async () => {
    const booksURL = 'http://localhost:3001/books';
    let booksResponse = await axios.get(booksURL);
    let bookData = booksResponse.data;
    this.setState({ books: bookData });
    console.log('bookData' + booksResponse.data[0].title)
  }


  render() {
    /* TODO: render user's books in a Carousel */
    console.log('NEW BOOK', this.props.newBook)
    console.log(this.state.books)
    return (
      <>
        <h2>The Best Books Around</h2>
        {this.state.books.length > 0 ?
          <Carousel className="d-block w-50">
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/50"
                  alt={book.title}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <Button size="sm" variant="danger"  value="delete" onClick={() => this.handleDelete(book._id, book.email)}>Delete</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}


          </Carousel>
          : <p>Sorry, no books available.</p>
        }
      </>
    )
  }
}
export default BestBooks;