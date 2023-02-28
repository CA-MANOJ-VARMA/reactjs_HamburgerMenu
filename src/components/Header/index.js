// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

const Header = () => {
  console.log('Header')
  return (
    <Popup
      modal
      trigger={
        <div className="css-Header-container">
          <div className="css-logo-container">
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
                alt="website logo"
                className="css-logo-itself"
              />
            </Link>
          </div>
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="css-hamburger-icon" />
          </button>
        </div>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div className="css-close-button-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="css-hamburger-icon" />
            </button>
          </div>
          <ul className="css-popup-home-about-container">
            <li className="css-home-popup-container">
              <Link to="/">
                <AiFillHome />
                Home
              </Link>
            </li>

            <li className="css-home-popup-container">
              <Link to="/about">
                <BsInfoCircleFill />
                About
              </Link>
            </li>
          </ul>
        </>
      )}
    </Popup>
  )
}

export default Header
