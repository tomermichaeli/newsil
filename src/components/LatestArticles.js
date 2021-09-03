import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { latest, hero, title } from "../styles/components/latestarticles.module.scss"
import { Link } from "gatsby"

const LatestArticles = (props) => {
  const data = props.articles

  return (
    <ul className={latest}>
      {data.map((article) => {
        return (
          <Link to={`/news/${article.node.fields.slug}`} key={article.node.id}>
            <li>
              <div className={hero}>
                {article.node.frontmatter.hero_image &&
                  <GatsbyImage
                    alt={article.node.frontmatter.title}
                    image={article.node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
                  />
                }
              </div>
              <div className={title}>
                {article.node.frontmatter.article_title}
              </div>
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

export default LatestArticles
