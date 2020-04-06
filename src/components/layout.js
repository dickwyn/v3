/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from './seo'
import Header from './header'
import Footer from './footer'
import '../scss/main.scss'

const Layout = ({ page, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
