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
