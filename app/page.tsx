'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { DIC, GUEST_INFO, PLACE_INFO } from "./conversion";
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
const currencies = DIC();

export default function Home() {
  const [f_place, setf_place] = useState('魔法森林')
  const [f_guest, setf_guest] = useState('橙')

  const GetPlace = () => {
    var pi = PLACE_INFO(f_place)
    console.log(pi)
  }
  const GetGuest = () => {
    var gi = GUEST_INFO(f_guest)
    console.log(gi)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            奇怪水酱的食堂查询器
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <br /><br />

      <Grid container justifyContent="center" spacing={4}>
        <Grid xs={6}>
          <TextField onChange={(v) => setf_place(v.target.value)} id="outlined-select-currency" select label="选择一个地点" defaultValue="魔法森林" helperText=" " fullWidth>
            {
              currencies.PlaceName.map((placeName) => (
                <MenuItem key={placeName} value={placeName}>
                  {placeName}
                </MenuItem>
              ))
            }
          </TextField>
          <Button variant="contained" fullWidth onClick={() => GetPlace()} >查询地点</Button>
        </Grid>
        <Grid xs={6}>
          <TextField onChange={(v) => setf_guest(v.target.value)} id="outlined-select-currency" select label="选择一位食客" defaultValue="橙" helperText=" " fullWidth>
            {
              currencies.Guest.map((guest) => (
                <MenuItem key={guest} value={guest}>
                  {guest}
                </MenuItem>
              ))
            }
          </TextField>
          <Button variant="contained" fullWidth onClick={() => GetGuest()} >查询食客</Button>
        </Grid>
      </Grid>

    </Box>
  );
}
