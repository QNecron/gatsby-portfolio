import React from "react"
import PropTypes from "prop-types"

import Section from "../section/section"

const Hero = ({ ...props }) => {

  return (

    <>

      <Section id={props.id} type="hero">
        <h1 className="hero-primary">{props.title}</h1>
        <h2 className="hero-secondary">{props.subtitle}</h2>
      </Section>

    </>

  )

}

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired
}

export default Hero
