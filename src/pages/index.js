import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Hero from '../components/hero'

const IndexPage = ({ data }) => {
  console.log(data.hero.edges[0]);
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node}/>
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            titulo
            entrada
            emoji
            palabras
            subtitulo
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`


