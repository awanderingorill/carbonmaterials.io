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
    <div class="company-name-and-contact">
      <h1>Carbon Materials</h1>
      <div class="name-and-email">
        <h2>Barbara Wingler</h2>
        <p><a href="mailto:barbara@carbonmaterials.io">barbara@carbonmaterials.io</a></p>
      </div>
      <div class="name-and-email">
        <h2>Eugenio Giraldo</h2>
        <p><a href="mailto:eugenio@carbonmaterials.io">eugenio@carbonmaterials.io</a></p>
      </div>
    </div>
    
  </div></>
}

