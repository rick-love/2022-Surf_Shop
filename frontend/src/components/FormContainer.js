import Container from '@mui/material/Container'
import React from 'react'

const FormContainer = ({ children }) => {
  return (
    <Container>
      {/* Row / Column / 'justify content md center */}
      {children}
    </Container>
  )
}

export default FormContainer
