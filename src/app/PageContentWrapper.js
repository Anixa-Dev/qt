"use client"
import React from 'react'

import VariablePath from '@/components/ui/VariablePath'
import { styled } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

const Container = styled('div')({
  minHeight: '100vh',
  padding: '32px 96px',
  '@media (max-width: 600px)': {
    padding: '32px 16px',
  },
})

const PathContainer = styled('div')({
  marginBottom: '30px',
})

const PageContentWrapper = ({ children, hasVariablePath }) => {
  return (
    <Container>
      {hasVariablePath && (
        <PathContainer>
          <BrowserRouter>
            <VariablePath />
          </BrowserRouter>
        </PathContainer>
      )}
      {children}
    </Container>
  )
}

export default PageContentWrapper
