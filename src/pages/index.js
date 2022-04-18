import React from "react"
import styles from "../styles/global.css"
import { Helmet } from "react-helmet"

export default function Home() {
  return <><Helmet>
    <title>Carbon Materials</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
  </Helmet>
  <div className={styles}>
    <div class="logo">
      <img src="./img/CM_icon.svg"></img>
    </div>
    
  </div></>
}

