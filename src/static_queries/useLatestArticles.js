import { graphql, useStaticQuery } from "gatsby"

export default function useLatestArticles() {
  const data = useStaticQuery(graphql`query getLatestArticles {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
    edges {
      node {
        id
        frontmatter {
          date(formatString: "Do בMMMM YYYY", locale: "he")
          author
          article_title
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
            }
          }
        }
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
      }
    }
  }
}
`)
  return data.allMarkdownRemark.edges
}
