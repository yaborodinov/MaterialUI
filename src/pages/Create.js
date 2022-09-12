import React from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
// import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Create() {
  return (
    <Container>
      <Typography
        variant="h3"
        component="h1"
        color='primary'
        align="center"
        gutterBottom
      >
        Create a new Note
      </Typography>

      <Button 
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<ArrowForwardIcon />}
      >
        Submit
      </Button>

      <br/>
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color='primary' />
      <AcUnitOutlinedIcon fontSize='small' />
      <AcUnitOutlinedIcon fontSize='large'/>
    </Container>
  )
}
