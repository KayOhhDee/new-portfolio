/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import 'normalize.css'
import '../assets/css/main.css'

import Header from "./header"
import Footer from "./footer"
import FixedSocialIcons from "./FixedSocialIcons"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main id="main">{children}</main>
      <Footer />
      <FixedSocialIcons />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
