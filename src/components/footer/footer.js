import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

const Footer = ({ ...props }) => {

  return (

    <footer className="footer-container" role="contentinfo">
      &copy; {new Date().getFullYear()} {props.title}
    </footer>

  )

}

Footer.propTypes = {
  title: PropTypes.string,
}

Footer.defaultProps = {
  title: ``,
}

export default Footer
