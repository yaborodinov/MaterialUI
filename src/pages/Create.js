import React from 'react'
import { useState } from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';

const TextFieldStyle = {
  marginTop: 1,
  marginBottom: 1,
}

export default function Create() {
const [title, setTitle] = useState('');
const [details, setDetails] = useState('');
const [errorTitle, setErrorTitle] = useState(false)
const [errorDetails, setErrorDetails] = useState(false)

const checkTitleString = () => {
  title && title.trim() ? setErrorTitle(false) : setErrorTitle(true)
}
const checkDetailsString = () => {
  details && details.trim() ? setErrorDetails(false) : setErrorDetails(true)
}

const handleSubmit = (e) => {
  e.preventDefault()
  
  checkTitleString()
  checkDetailsString()

  if (title && details) {
    console.log("it's ok!");
  }
}
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

      <form noValidate autoComplete='off' onSubmit={handleSubmit}> 
        <TextField 
          onChange={(e) => {
            setTitle(e.target.value)
            checkTitleString()
          }}
          label='Notes title'
          variant='outlined'
          fullWidth
          required
          sx={TextFieldStyle}
          error={errorTitle}
        />
        <TextField 
          onChange={(e) => {
            setDetails(e.target.value)
            checkDetailsString()
          }}
          label='Details'
          variant='outlined'
          fullWidth
          required
          multiline
          rows={3}
          sx={TextFieldStyle}
          error={errorDetails}
        />

        <Button 
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<ArrowForwardIcon />}
        >
          Submit
        </Button>
      </form>

    </Container>
  )
}
