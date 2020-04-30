/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import "./layout.css"

const LayoutWrapper = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
