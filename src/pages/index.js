import React from "react"
import SEO from "../components/seo"
import "../scss/main.scss"

const IndexPage = () => (
  <div className="root-container">
    <SEO title="index" />
    <header>header</header>

    <main>
      <div className="container-fluid home">
        <h1>Hi, I'm Dick Wyn.</h1>
        <h2>
          I'm a recent Computer Science graduate from Arizona State University.
          I have a strong passion for web development, mobile computing and
          human-computer interaction. I also enjoy writing blogs, taking photos
          and travelling.
        </h2>
        <h2>I'm active on Twitter and Instagram</h2>
      </div>
    </main>

    <footer>footer</footer>
  </div>
)

export default IndexPage
