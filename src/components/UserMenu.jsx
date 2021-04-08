import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { loginModalTriggered, userLoggedOut } from '../actions/userActions'
import { useHistory } from 'react-router-dom'

const AVATAR_IMAGE_URL = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </div>
));

export default function UserMenu() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  let history = useHistory()

  const handleSelect = (option) => {
    if(option === '1'){
      const currentUser = this.props.currentUser
      if(currentUser){
        dispatch(userLoggedOut())
      }
      else{
        dispatch(loginModalTriggered(true))
      }
    }
    else if(option === '2'){
      history.push("/favorites")
    }
  }

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <img className="rounded-circle" width="50px" alt="user" src={currentUser? currentUser.avatarUrl : AVATAR_IMAGE_URL}/>
      </Dropdown.Toggle>
  
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">{currentUser? 'Logout' : 'Login'}</Dropdown.Item>
        {
          currentUser? <Dropdown.Item eventKey="2">Favorites</Dropdown.Item> : ""
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

