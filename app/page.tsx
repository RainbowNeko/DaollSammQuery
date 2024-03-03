import Image from "next/image";
import * as React from 'react';
import Button from '@mui/material/Button';
import { Stack, TextField } from "@mui/material";
import { DIC } from "./conversion";
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Grid from '@mui/material/Unstable_Grid2';
import { Itim } from "next/font/google";
const currencies = DIC();

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            查询器
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <br /><br />

      <Grid container justifyContent="center" spacing={4}>
        <Grid xs={6}>
          <TextField id="outlined-select-currency" select label="选择一个地点" defaultValue="EUR" helperText="选择一个地点" fullWidth>
            {
              currencies.PlaceName.map((placeName) => (
                <MenuItem key={"placeName"} value={placeName}>
                  {placeName}
                </MenuItem>
              ))
            }
          </TextField>
          <Button variant="contained" fullWidth>查询地点</Button>
        </Grid>
        <Grid xs={6}>
          <TextField id="outlined-select-currency" select label="选择一位食客" defaultValue="EUR" helperText="选择一位食客" fullWidth>
            {
              currencies.Guest.map((guest) => (
                <MenuItem key={"guest"} value={guest}>
                  {guest}
                </MenuItem>
              ))
            }
          </TextField>
          <Button variant="contained" fullWidth>查询食客</Button>
        </Grid>
      </Grid>
      
    </Box>
  );
}
