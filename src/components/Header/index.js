import {Link} from 'react-router-dom'

import {BiVideo} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'
import {FaDribbbleSquare} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => (
  <>
    <div className="main-header">
      <div className="header-first-div">
        <h1 className="header-heading">Virtual Cards</h1>
        <BiVideo className="header-cam-icon" />
        <p className="header-first-para">Learn more</p>
      </div>
      <div className="header-second-div">
        <AiOutlinePlus />
        <p className="header-second-para">Virtual Cards</p>
      </div>
    </div>
    <div className="header-last-card">
      <div className="header-ul">
        <Link to="your" className="link-header">
          <p>Your</p>
        </Link>

        <Link to="all" className="link-header">
          <p>All</p>
        </Link>
        <Link to="block" className="link-header">
          <p>Blocked</p>
        </Link>
      </div>
      <div className="header-icons-div">
        <FaDribbbleSquare />
        <GiHamburgerMenu />
      </div>
    </div>
  </>
)

export default Header
