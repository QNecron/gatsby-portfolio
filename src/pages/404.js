import * as React from "react"

import Seo from "../components/seo/seo"
import Page from "../components/page/page"

const NotFoundPage = () => (
  <Page>
    <Seo title="404: Not found" />
    <h1>404</h1>
    <p>Error, error, intruder alert!</p>
  </Page>
)

export default NotFoundPage
