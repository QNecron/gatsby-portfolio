import React from "react"
import PropTypes from "prop-types"

const Section = ({ ...props }) => {

  return (

    <>

      <section id={props.id} className={`section ${ props.theme }`} data-section={props.type}>
        <div className="wrapper">
          {props.children}
        </div>
      </section>

    </>

  )

}

Section.propTypes = {
  id: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired
}

Section.defaultProps = {
  theme: "white",
  type: "default"
}


export default Section
