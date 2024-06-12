import React from 'react'
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows,columns } from './data';
import Header from "../../components/Header";
const Invoices = () => {
  return (
    <Box>
     <Header title="INVOICES" subTitle="List of Invoice Balances" />

    <Box sx={{ height: 600, mx: "auto" }}>
      <DataGrid
      checkboxSelection
         slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  </Box>
  )
}

export default Invoices