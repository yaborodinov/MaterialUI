import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';


export default function Notes() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/notes")
    .then(res => res.json())
    .then(data => setNotes(data))
  }, []);
  return (
    <Container>
    <Button
    type='button'
    color='secondary'
    variant='contained'
    endIcon={<AddCircleIcon />}
    component={Link}
    to="/create"
    >
      Link to creation page
    </Button>
      <div>
        <Grid container sx={{margin: '20px 0'}}>
          {notes.map((note) => {
            return <Grid item xs={12}
             sx={{
              marginBottom: '10px',
              }}
              key={note.id}>
              <Paper
               elevation={2}
                sx={{
                  padding: '5px',
                }}
              >
                {note.title}
              </Paper>
            </Grid>
          })}
        </Grid>
      </div>
    </Container>
    
  )
}
