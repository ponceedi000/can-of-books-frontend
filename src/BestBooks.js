import axios from 'axios';
import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
