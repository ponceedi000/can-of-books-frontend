import axios from 'axios';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import Profile from './Profile'
import BookFormModal from './BookFormModal';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showModal: false,
      newBook: null

    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  handleShow = (event) => {
    this.setState({
      showModal: true,
    })
  }
  handleClose = (event) => {
    this.setState({
      showModal: false,
    })
  }

  handleCreate = async (bookInfo) => {
    const newBookResponse = await axios.post('http://localhost:3001/books', bookInfo);
    // this.props.fetchBooks();// DANGER: losing location
    this.setState({
      newBook: newBookResponse.data
    })
  };

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <BestBooks newBook={this.state.newBook} />
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/create">
              <BookFormModal handleClose={this.handleClose} handleShow={this.handleShow} showModal={this.state.showModal} onCreate={this.handleCreate} />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
