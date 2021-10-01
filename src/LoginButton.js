import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm.js'

export default class LoginButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showLogin: false
    }
  }

  handleLogin = () => {
    this.setState({
      showLogin: true
    })
  }
  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <>
        {this.state.showLogin ? (
          <LoginForm loginHandler={this.props.loginHandler}/>
        ) : (
          <Button onClick={this.handleLogin}>Login</Button>
        )}
      </>
    )
  }
}
