import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { geo } from "./world_countries";
import { data } from "./data";
import GeoAll from './GeoAll'
import Header from "../../components/Header";

const Geography = () => {
  const theme = useTheme();
  return (
    <Box>
        <Header title="Geography" subTitle="Simple Geography Chart" />
     <GeoAll/>
    </Box>
  )
}

export default Geography