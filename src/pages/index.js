import * as React from "react"
// import { Link } from "gatsby"

import Data from "../../json/data.json"

import Seo from "../components/seo/seo"
import Page from "../components/page/page"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"

const Index = () => (

  <Page data={Data}>

    <Seo title="Welcome" />

    {Data.map((data, index) => {

      if(data.id === "introduction") {

        return(
          <Hero
            id={data.id}
            title={data.title}
            subtitle={data.subtitle}
            key={index}
          />
        )

      }
      else {

        return(
          <Section id={data.id} key={index}>
            <h2 className="heading-primary">{data.id}</h2>
            <p>{data.copy}</p>
          </Section>
        )

      }

    })}

  </Page>

)

export default Index
