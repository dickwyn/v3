import React from "react"
import SEO from "../components/seo"
import "../scss/main.scss"

const IndexPage = () => (
  <div className="container">
    <SEO title="index" />
    <header>header</header>

    <main>
      <div className="container-fluid">Hello</div>
    </main>

    <footer>footer</footer>
  </div>
)

export default IndexPage
