import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="navBar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <ul className="nav-center">
        <Link to="/" className="link-item">
          <li className="list-text">Home</li>
        </Link>
        <Link to="/jobs" className="link-item">
          <li className="list-text">Jobs</li>
        </Link>
      </ul>
      <button type="button" className="logout-button" onClick={onLogOut}>
        Log Out
      </button>
    </div>
  )
}

export default withRouter(Header)
