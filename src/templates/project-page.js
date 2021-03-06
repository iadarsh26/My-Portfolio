import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'


export const ProjectPageTemplate = ({
  title,
  intro,
  
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/programming-code-icon-made-with-binary-code-coding-hacker-matrix-background-with-digits-1-0_127544-1141.jpg?size=626&ext=jpg)`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={intro.blurbs} />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ProjectPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProjectPageTemplate
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            subheading
            text
            tags
          }
        }
      }
    }
  }
`
