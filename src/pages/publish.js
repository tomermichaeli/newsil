import React from "react"
import Layout from "../components/Layout"
import * as infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"


export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={infoData.background_color}>
      <section className={infoStyles.info_blurb}>
      <form method="post" action="https://thenewsil.herokuapp.com/abc">
      {/* <form method="post" action="http://localhost:3000/abc"> */}
      {/* <form method="post" action="/"> */}
            <div><input type="datetime-local" name="time" id="time"/></div>
            <div><textarea name="headline" id="headline" class="headline" placeholder="כותרת" rows="5"></textarea></div>
            <div><textarea name="body" id="body" class="body" placeholder="כותרת משנה" rows="5"></textarea></div>
            <div><label class="switch">
                <input type="checkbox" checked name="tweet" id="tweet"/>
                <span class="slider round tweet"></span>
            </label> &nbsp;
            <label class="switch">
                <input type="checkbox" name="thread" id="thread"/>
                <span class="threader round"></span>
            </label></div>
            <div class="sendbutton"><button class="sendbutton" onclick="window.location.href = '/';">Publish</button></div>
        </form>
      </section>
    </Layout>
  )
}
