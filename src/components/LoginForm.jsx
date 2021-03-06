import React from 'react'
import { Form } from 'react-bootstrap'


export default function LoginForm({username, password, errorMessage, handleChange }) {
  return (
    <div className="bg-transparent">
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
          <Form.Control name="username" className="my-2 border-top-0 border-left-0 border-right-0" type="text" onChange={handleChange} value={username} placeholder="Username"/>     
          <Form.Control name="password" className="my-2 border-top-0 border-left-0 border-right-0" type="password" onChange={handleChange} value={password} placeholder="Password"/>      
        </Form.Group>
    </div>
  )
}

