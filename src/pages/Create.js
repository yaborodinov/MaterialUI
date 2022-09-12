import React from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
// import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'



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
      >
        Submit
      </Button>

      {/* <Button
        variant='contained'
        color="secondary"
      >
        Save
      </Button>

      <Button
          variant='contained'
          color='primary'
        >
          Check
        </Button>
      
      <ButtonGroup color='secondary'>
        <Button
          variant='outlined'
          color='primary'
        >
          This
        </Button>
        
        <Button
          variant='outlined'
          color='secondary'
        >
          Outlined
        </Button>
      </ButtonGroup> */}


    </Container>
  )
}
