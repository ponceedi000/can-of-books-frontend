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
    try {
      const bookUrl = await axios.get('https://localhost:27017/books');
      this.setState


    } catch (error) {
      console.error(error)
    }
  }

async fetchBooks(email = null) {
  let booksURL = 'http://localhost:3001/books';

  if(email) {
    booksURL += `?email=${email}`;
  }

  try {
    const response = await axios.get(booksURL);
    this.setState({ books: response.data})
  
  } catch (error) {
    console.log(error);
  }
  console.log(this.state.books);
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

    return (

        <Carousel>
          {/* {this.state.displayBooks ( */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{this.state.books.title}</h3> {/*this doesn't work yet*/}
              <p>{this.state.books.description}</p> {/*this doesn't work yet*/}
            </Carousel.Caption>
          </Carousel.Item>
          {/* )} */}
        </Carousel>
    )
  }
}
export default BestBooks;