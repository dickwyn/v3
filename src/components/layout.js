import React from 'react'
import PropTypes from 'prop-types'
import SEO from './seo'
import Header from './header'
import Footer from './footer'
import '../scss/main.scss'

const Layout = ({ page, children }) => {
  return (
    <div className="root-container">
      <SEO title={page} />
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
