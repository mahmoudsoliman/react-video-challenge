import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Form } from 'react-bootstrap'
import { loginModalTriggered, userLoggedIn } from '../actions/userActions'
import * as authService from '../services/authService'

class LoginModal extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: null
  }

  handleClose = () => {
    this.props.loginModalTriggered(false)
  }

  handleSubmit = async () => {
    const {
      username,
      password
    } = this.state

    try {
      const user = await authService.login(username, password)
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
      <Modal show={this.props.loginModalOpen} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group >
            {
              errorMessage?
              <div className="alert alert-warning row">
                <div className="col-1"> 
                  <i className="fa fa-exclamation-circle"></i>
                </div>
                <div className="col">
                  {errorMessage}
                </div>
              </div> : ""
            }
            <Form.Control name="username" className="my-2 border-top-0 border-left-0 border-right-0" type="text" onChange={this.handleChange} value={username} placeholder="Username"/>     
            <Form.Control name="password" className="my-2 border-top-0 border-left-0 border-right-0" type="password" onChange={this.handleChange} value={password} placeholder="Password"/>      
          </Form.Group>
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
  loginModalOpen: state.user.loginModalOpen
})

export default connect(mapStateToProps, {loginModalTriggered, userLoggedIn})(LoginModal)