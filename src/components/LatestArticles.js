import React from "react"
import useLatestArticles from "../static_queries/useLatestArticles"
import { GatsbyImage } from "gatsby-plugin-image"
import { latest, item, hero, title } from "../styles/components/latestarticles.module.scss"

const LatestArticles = () => {
  const data = useLatestArticles()

  return (
    <ul className={latest}>
      {data.map((article) => {
        return (
          <li className={item}>
            <div className={hero}>
            <GatsbyImage
              alt={article.node.frontmatter.title}
              image={article.node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
            />
            </div>
            <div className={title}>
              {article.node.frontmatter.article_title}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default LatestArticles
