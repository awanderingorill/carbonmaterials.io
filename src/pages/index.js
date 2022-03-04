import React from "react"
import styles from "../styles/global.css"
import { Helmet } from "react-helmet"

export default function Home() {
  return <><Helmet>
    <title>Saint Warren</title>
  </Helmet>
  <div className={styles}>
    <div class="logo">Saint Warren</div>
    <div class="description-and-links">
      <p>
        Saint Warren is both a perfume line and the alias of Brooklyn-based DJ/visual artist, Warren Mark Way.
      </p>
      <p>
        <a href="https://instagram.com/saint_warren" target="new">
          @saint_warren
        </a>
      </p>
    </div>
    <div class="perfume-and-warren">
      <img src="./img/IMG_0874.jpeg"></img>
      <img src="./img/IMG_0948.jpeg" class="warren"></img>
    </div>
  </div></>
}

