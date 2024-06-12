import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import PieAll from '../../page/pie/PieAll'
import React from 'react'
import LineAll from '../../page/line/LineAll'
import BarAll from '../../page/bar/BarAll'
import GeoAll from '../../page/geography/GeoAll'


const Row3 = () => {
  const theme=useTheme()
  return (
    <Stack gap={2} direction={"row"} flexWrap={"wrap"} sx={{marginTop:"20px"}}>
      <Paper sx={{width:"28%",flexGrow: 1,minWidth: "400px",}}>
      <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <PieAll isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{width:"33%",flexGrow: 1,minWidth: "400px",}}>
      <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <BarAll  isDashbord={true}/>
      </Paper>
      <Paper sx={{width:"33%",flexGrow: 1,minWidth: "400px",}}>
          <GeoAll isDashbord={true}/>
      </Paper>
    </Stack>
  )
}

export default Row3