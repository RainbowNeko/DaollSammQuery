'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import { Card, Stack, TextField, Tooltip } from "@mui/material";
import { DIC, GUEST_INFO, PLACE_INFO } from "./conversion";
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/joy/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/joy/Chip';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
const currencies = DIC();

export default function Home() {
  const [f_place, setf_place] = useState('魔法森林')
  const [f_guest, setf_guest] = useState('橙')

  const [res_place, setrres_place] = useState(PLACE_INFO(f_place))
  const [res_guest, setrres_guest] = useState(GUEST_INFO(f_guest))

  const GetPlace = (name: string) => {
    setf_place(name)
    var pi = PLACE_INFO(f_place)
    setrres_place(pi)
    // console.log(pi)
  }

  const GetGuest = (name: string) => {
    setf_guest(name)
    var gi = GUEST_INFO(f_guest)
    setrres_guest(gi)
    // console.log(gi)
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
          <TextField onChange={(v) => GetPlace(v.target.value)} id="outlined-select-currency" select label="选择一个地点" defaultValue="魔法森林" helperText=" " fullWidth>
            {
              currencies.PlaceName.map((placeName) => (
                <MenuItem key={placeName} value={placeName}>
                  {placeName}
                </MenuItem>
              ))
            }
          </TextField>
        </Grid>
        <Grid xs={6}>
          <TextField onChange={(v) => GetGuest(v.target.value)} id="outlined-select-currency" select label="选择一位食客" defaultValue="橙" helperText=" " fullWidth>
            {
              currencies.Guest.map((guest) => (
                <MenuItem key={guest} value={guest}>
                  {guest}
                </MenuItem>
              ))
            }
          </TextField>
        </Grid>
      </Grid>

      <Table>
        <thead>
          <tr>
            <th style={{ width: '10%' }}>{f_place}</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>出现的人物</td><td>{res_place.出现的人物.map(c => { return <Chip key={"1"}>{c}</Chip> })}</td>
          </tr>
          <tr>
            <td>推荐菜单</td><td>{res_place.推荐菜单.map(c => { return <Chip key={"2"}>{c}</Chip> })}</td>
          </tr>
          <tr>
            <td> 推荐酒水</td><td>{res_place.推荐酒水.map(c => { return <Chip key={"3"}>{c}</Chip> })}</td>
          </tr>
        </tbody>
      </Table>
      <br />

      <Table>
        <thead>
          <tr>
            <th style={{ width: '10%' }}>{f_guest}</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>出没地点</td><td>{res_guest.人物属性.frequent_occurrence.map(c => { return <Chip key={"4"}>{c}</Chip> })}</td>
          </tr>
          <tr>
            <td >喜爱的菜单</td><td>{res_guest.人物属性.like.map(c => { return <Chip key={"5"}>{c}</Chip> })}</td>
          </tr>
          <tr>
            <td >喜爱的酒水</td><td>{res_guest.人物属性.likewine.map(c => { return <Chip key={"6"}>{c}</Chip> })}</td>
          </tr>
          <tr>
            <td >不喜爱</td><td>{res_guest.人物属性.unlike.map(c => { return <Chip key={"7"}>{c}</Chip> })}</td>
          </tr>
          <tr>
            <td>携带金额</td><td>{res_guest.人物属性.money}</td>
          </tr>
          <tr>
            <td>推荐菜单</td><td>{res_guest.推荐菜单.map(c => { return <Chip key={"8"}>{c}</Chip> })}</td>
          </tr>
          <tr>
            <td>推荐酒水</td><td>{res_guest.推荐酒水.map(c => { return <Chip key={"9"}>{c}</Chip> })}</td>
          </tr>
        </tbody>
      </Table>
    </Box>
  );
}
