import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/Layout"
import * as notFoundStyles from "../styles/pages/404.module.scss"

export default function NotFound() {
  useEffect(() => {
    const handle = setTimeout(() => {
      navigate("/")
    }, 5000)

    return () => clearTimeout(handle)
  }, [])

  return (
    <Layout page="404" bgColor="inherit">
      <div className={notFoundStyles.notFound__container}>
        <Link to="/">
          <h1>הדף לא נמצא. לחצו למעבר לעמוד הראשי</h1>
        </Link>
      </div>
    </Layout>
  )
}
