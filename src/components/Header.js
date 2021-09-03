import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.header__nav} role="navigation" aria-label="main navigation">
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>

        <div className={headerStyles.tweets}>
          <a
            aria-hidden="true"
            aria-label="twitter-timeline"
            className="twitter-timeline"
            data-lang="he"
            data-height="100%"
            href="https://twitter.com/thenewsil?ref_src=twsrc%5Etfw"
          />
        </div>
      </nav>
    </header>
  )
}
