"use client"

import React from 'react'
import AuthWrapper from './authWrapper/AuthWrapper'
import { Box } from '@mui/material'
import { ContainerLogin } from './containerLogin/ContainerLogin'
import AppLogo from '../appLogo'




export default function Login() {

  return (
    <>
      <AuthWrapper>
        <Box sx={{ width: '100%'}}>
          <Box sx={{ mb: { xs: 6, xl: 8 } }}>
            <Box
              sx={{
                mb: 5,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <AppLogo />
            </Box>
          </Box>
          <ContainerLogin />
        </Box>
      </AuthWrapper>
    </>
  )
}
