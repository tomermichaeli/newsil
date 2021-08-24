import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import { GatsbyImage } from "gatsby-plugin-image";

export default function BlogList() {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                <li key={blog.node.fields.slug}>
                  {blog.node.frontmatter.hero_image &&
                    <div className={blogListStyles.list__hero}>
                      <GatsbyImage
                        image={blog.node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
                        alt={blog.node.frontmatter.title} />
                    </div>}
                  <div className={blogListStyles.list__info}>
                    <h2>{blog.node.frontmatter.article_title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
              </Link>
            );
          })}
      </div>
    );
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}

