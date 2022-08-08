// Example page connected to mongoDB

import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
// import BlogList from "../components/BlogList"
import * as headerStyles from "../styles/components/header.module.scss"


export default function IndexPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch('http://localhost:5001')
    fetch('https://newsilserver.herokuapp.com/all')
      .then(response => response.json())
      .then(newData => {
        setData(newData)
      });
  }, []);
  return (
    <Layout bgColor="inherit">
      <section>
      <div className={headerStyles.mobile}>
              <ul>
                {data.slice(0, 25).map(item => (
                  <li className={headerStyles.update_container}>
                    <div className={headerStyles.headline_old}><span className={headerStyles.headerspan}>{item["headline"]}</span></div>
                    <div className={headerStyles.time_old}>{item["time"].slice(11, 16) + " • " + item["time"].slice(8, 10) + "/" + item["time"].slice(5, 7) + "/" + item["time"].slice(0, 4)}</div>
                    <div className={headerStyles.body_old}>{item["body"]}</div>

                    {item["quote"] != null &&
                      <div className={headerStyles.quoted_container}>
                        <div>{item["quote_headline"]}</div>
                        <div className={headerStyles.time_quoted}>{item["quote_time"]}</div>
                        <div>{item["quote_body"]}</div>
                      </div>
                    }

                    <hr className={headerStyles.sep}></hr>
                  </li>
                ))}
              </ul>

          </div>
      </section>
    </Layout>
  )
}