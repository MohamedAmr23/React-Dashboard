import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box,useTheme } from '@mui/material';
import BarAll from './BarAll';
import Header from "../../components/Header";
const Bar = () => {
    const theme = useTheme();
  return (
    <>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
        <BarAll/>
    </>
  )
}

export default Bar