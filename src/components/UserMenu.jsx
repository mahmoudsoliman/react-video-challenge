import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { loginModalTriggered, userLoggedOut } from '../actions/userActions'

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

class UserMenu extends Component {
  handleSelect = (option) => {
    const currentUser = this.props.currentUser
    if(currentUser){
      this.props.userLoggedOut()
    }
    else{
      this.props.loginModalTriggered(true)
    }
  }

  render() {
    const currentUser = this.props.currentUser
    return (
        <Dropdown onSelect={this.handleSelect}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          <img className="rounded-circle" width="50px" src={currentUser? currentUser.avatarUrl : AVATAR_IMAGE_URL}/>
        </Dropdown.Toggle>
    
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">{currentUser? 'Logout' : 'Login'}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const mapStateToProps = state => ({
  loginModalOpen: state.user.loginModalOpen,
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, {loginModalTriggered, userLoggedOut})(UserMenu)
