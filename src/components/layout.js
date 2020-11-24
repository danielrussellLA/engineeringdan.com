/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div
        css={css`
          padding: 1rem;
          p {
            margin: 0 0 .05rem;
          }
        `}
      >
        <p>engineeringdan.com is currently under construction. Thank you for your patience.</p>
        <p>If you're curious to see what I've been up to lately, check out the site I work on: <a href="https://www.startpage.com" target="_blank" rel="noopener nofollow">https://www.startpage.com</a></p>
        <p>- Daniel Russell</p>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
