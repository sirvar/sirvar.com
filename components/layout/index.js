import React from "react"
import styled from 'styled-components'

// import "./layout.css"

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

export default Layout
