import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { loginModalTriggered, userLoggedIn } from '../actions/userActions'
import * as authService from '../services/authService'
import LoginForm from './LoginForm'

class LoginModal extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: null
  }

  handleClose = () => {
    this.setState({
      username: '',
      password: '',
      errorMessage: null
    })
    this.props.loginModalTriggered(false)
  }

  handleSubmit = async () => {
    const {
      username,
      password
    } = this.state

    try {
      const user = await authService.login(username, password)
      this.setState({
        username: '',
        password: '',
        errorMessage: null
      })
      this.props.userLoggedIn(user)
    } catch (error) {
      this.setState({
        errorMessage: 'Username or password invalid'
      })
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const {name, value} = input
    this.setState({ [name]: value })
  }

  render() {
    const {
      username,
      password,
      errorMessage
    } = this.state

    return (
      <Modal show={this.props.loginModalOpen} onHide={this.handleClose} keyboard contentClassName={this.props.darkTheme? 'dark-theme' : 'light-theme'}>
        <Modal.Header>
          <Modal.Title className={this.props.darkTheme? 'dark-theme' : 'light-theme'}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {
            this.props.loginModalOpen? (<LoginForm username={username} password={password} errorMessage={errorMessage} handleChange={this.handleChange}/>) : ""
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  loginModalOpen: state.user.loginModalOpen,
  darkTheme: state.theme.darkTheme
})

export default connect(mapStateToProps, {loginModalTriggered, userLoggedIn})(LoginModal)