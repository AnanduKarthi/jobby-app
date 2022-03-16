import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="heading-main">Find The Job That Fits In Your Life</h1>
        <p className="heading-sub">
          Millions Of peoples Are Searching For Job,Salary Information, Company
          Review Find The Job That Fits Your Ability And Potential
        </p>
        <Link to="/jobs">
          <button type="button" className="find-button">
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
