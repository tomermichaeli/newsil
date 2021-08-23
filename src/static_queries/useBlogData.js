import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`query getBlogData {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        id
        frontmatter {
          date(formatString: "Do בMMMM YYYY", locale: "he")
          author
          title
          article_title
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED)
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
