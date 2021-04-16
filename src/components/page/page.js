import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer/footer"

import "../../styles/style.scss"

const Page = ({ ...props }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <>

      <Header title={data.site.siteMetadata.title} data={props.data} />

      <main role="main">
        {props.children}
      </main>

      <Footer title={data.site.siteMetadata.title} />

    </>

  )

}

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
