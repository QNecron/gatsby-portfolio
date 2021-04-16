import React, { useState } from "react"
import { Link } from "gatsby"

const Header = ({ ...props }) => {

  const [menu, menuUpdate] = useState(false)
  const menuToggle = () => menuUpdate(value => !value)

  return (

    <header className="header-container" role="banner">

      <nav className="navigation-container" role="navigation">

        <Link to="/" className="nav-home">
          <span className="material-icons" aria-hidden="true">code</span>
          <span className="srt">Home</span>
        </Link>

        <button
          className="nav-mobile nav-link"
          onClick={menuToggle}
          aria-haspopup="true"
          aria-controls="nav"
          aria-expanded={menu}
        >
          <span className="" aria-hidden="true"></span>
          Menu
        </button>

        <ul id="nav" className="navigation" data-open={menu}>

          {props.data.map((data, index) => {

            return(
              <li className="nav-item" key={index}>
                <a href={"#" + data.id} className={data.classNav}>{data.id}</a>
              </li>
            )

          })}

        </ul>

      </nav>

    </header>

  )

}

export default Header
