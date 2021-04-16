import * as React from "react"
// import { Link } from "gatsby"

import Data from "../../json/data.json"

import Seo from "../components/seo/seo"
import Page from "../components/page/page"
import Section from "../components/section/section"

const NotFoundPage = () => (

  <Page data={Data}>

    <Seo title="404: Not found" />

    <Section id="404">
      <h1>404</h1>
      <p>Error, error, intruder alert!</p>
    </Section>


  </Page>
)

export default NotFoundPage
