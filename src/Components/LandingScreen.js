import { React } from 'react'
import { Link } from 'react-router-dom'
import "../StyleSheet/landingScreen.css"

const LandingScreen = () => {

  return (
    <div className='LandingScreen'>
        <div className='LandingNavbar'>
            <div className='Logo'>
                <h1>FUNC FIT</h1>
            </div>
            <div className='LandingButtonsGroup'>
                <Link to='/login'>
                    <a className="LandingButtons"> Login </a>
                </Link>
                <Link to='/register'>
                    <a className="LandingButtons"> Register </a>
                </Link>
                <Link to='/'>
                    <a className="LandingButtons"> FAQ </a>
                </Link>
                <Link to='/'>
                    <a className="LandingButtons"> About Us </a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LandingScreen