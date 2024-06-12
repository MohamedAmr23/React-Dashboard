import React from 'react'
import LineAll from './LineAll'
import { useTheme } from '@emotion/react'
import Header from "../../components/Header";
import { Box } from '@mui/material';
const Line = () => {
  const theme=useTheme()
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <LineAll/>

    </Box>
  )
}

export default Line