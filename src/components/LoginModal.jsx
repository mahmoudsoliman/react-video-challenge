import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { loginModalTriggered, userLoggedIn } from '../actions/userActions'
import * as authService from '../services/authService'
import LoginForm from './LoginForm'


export default function LoginModal() {
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const loginModalOpen = useSelector(state => state.user.loginModalOpen)
  const darkTheme = useSelector(state => state.theme.darkTheme)

  const dispatch = useDispatch()

  const handleClose = () => {
    setUsername('')
    setPassword('')
    setErrorMessage(null)    
    dispatch(loginModalTriggered(false))
  }

  const handleSubmit = async () => {
    try {
      const user = await authService.login(username, password)
      setUsername('')
      setPassword('')
      setErrorMessage(null)    
      dispatch(userLoggedIn(user))
    } catch (error) {
      setErrorMessage('Username or password invalid') 
    }
  }

  const handleChange = ({ currentTarget: input }) => {
    const {name, value} = input
    switch (name) {
      case 'username':
        setUsername(value)
        break;
      case 'password':
        setPassword(value)
        break;
      default:
        break;
    }
  }

  return (
    <Modal show={loginModalOpen} onHide={handleClose} keyboard contentClassName={darkTheme? 'dark-theme' : 'light-theme'}>
      <Modal.Header>
        <Modal.Title className={darkTheme? 'dark-theme' : 'light-theme'}>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        {
          loginModalOpen? (<LoginForm username={username} password={password} errorMessage={errorMessage} handleChange={handleChange}/>) : ""
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
