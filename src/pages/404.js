import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as notFoundStyles from '../styles/pages/404.module.scss'

export default function NotFound() {
    setTimeout(function(){
        window.location.href = '/';
     }, 5000);
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
