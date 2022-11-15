import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Footer = () => {
  return (
    <Box sx = {{position: 'fixed', bottom: 2, right: 5}}>
        <Typography color="primary" sx={{opacity: 0.4}}>
            Copyright FQB
        </Typography>
    </Box>
  )
}
