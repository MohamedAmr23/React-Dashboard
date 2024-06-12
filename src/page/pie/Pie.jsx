import React from 'react'
import { ResponsivePie } from "@nivo/pie";

import { Box, useTheme } from "@mui/material";
import PieAll from './PieAll';
import Header from "../../components/Header";


const Pie = ({ isDashbord = false }) => {
  const theme = useTheme();
    return (
      <>
        <Header title="Pie Chart" subTitle="Simple Pie Chart" />
        <PieAll/>
      </>
      
  )
}

export default Pie