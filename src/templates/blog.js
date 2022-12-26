import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import * as blogTemplateStyles from "../styles/templates/blog.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import LatestArticles from "../components/LatestArticles"

export default function Blog(props) {
  const data = props.data.markdownRemark

  return (
    <Layout>
      <head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="חדשות ישראל" />
        <meta name="twitter:description" content={"חדשות ישראל" | data.frontmatter.topic | data.frontmatter.article_title} />
        <meta name="twitter:image" content={data.frontmatter.hero_image} />
      </head>
      <article className={blogTemplateStyles.blog}>
        <Link to="/" className={blogTemplateStyles.back}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 26 26"
               enableBackground="new 0 0 26 26">
            <path
              d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z" />
          </svg>
        </Link>

        {data.frontmatter.hero_image &&
        <figure className={blogTemplateStyles.blog__hero}>
          <GatsbyImage
            image={data.frontmatter.hero_image.childImageSharp.gatsbyImageData}
            alt={data.frontmatter.title} />
            <span className={blogTemplateStyles.hero_image_description}>{data.frontmatter.hero_image_description}</span>
        </figure>
        }
        <div className={blogTemplateStyles.blog__info}>
          <h1><span>{data.frontmatter.article_title}</span></h1>
          <h3>{data.frontmatter.date}&nbsp;&nbsp;|&nbsp;&nbsp;{data.frontmatter.topic}&nbsp;&nbsp;|&nbsp;&nbsp;{data.frontmatter.author}</h3>
        </div>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        />
        <div className={blogTemplateStyles.blog__footer}>

          <hr className={blogTemplateStyles.bottomLine} />

          <LatestArticles articles={props.data.allMarkdownRemark.edges} />
        </div>
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    fields {
      slug
    }
    frontmatter {
      title
      article_title
      author
      topic
      date(formatString: "Do בMMMM YYYY", locale: "he")
      hero_image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      hero_image_description
    }
    html
  }

  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 3, filter:{fields: {slug: {ne: $slug}}}) {
    edges {
      node {
        id
        frontmatter {
          date(formatString: "Do בMMMM YYYY", locale: "he")
          author
          article_title
          topic
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
            }
          }
          hero_image_description
        }
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
      }
    }
  }
}
`
