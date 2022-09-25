import React from 'react'
import { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const style = {
  field: {
    marginTop: 1,
    marginBottom: 1,
    display: 'block'
  },
  changedSomething: {
    color: 'green'
  },
  speciallyFontSize: {
    fontSize: 33
  }
}

export default function Create() {
const [title, setTitle] = useState('');
const [details, setDetails] = useState('');
const [errorTitle, setErrorTitle] = useState(false)
const [errorDetails, setErrorDetails] = useState(false)
const [category, setCategory] = useState(false)

const history = useHistory();

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
    fetch('http://localhost:3010/notes', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({ title, details, category})
    }).then(() => history.push('/'))
  }
  
}
  return (
    <Container>
       <Button
    type='button'
    color='primary'
    variant='contained'
    startIcon={<ArrowBackIosNewIcon />}
    component={Link}
    to="/"
    sx={{
      backgroundColor: '#42a5f5',
      marginTop: '20px'
    }}
    >
      To results
    </Button>
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
          sx={style.field}
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
          sx={style.field}
          error={errorDetails}
        />

        <FormControl 
          sx={[
            style.field,
          ]}
        >
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={[
              style.changedSomething,
              style.speciallyFontSize
            ]}
          >Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value='female' control={<Radio />} label="Female" />
            <FormControlLabel value='male' control={<Radio />} label="Male" />
            <FormControlLabel value='other' control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        
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
