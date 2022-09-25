import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Container from '@mui/material/Container';
import { lightGreen } from '@mui/material/colors';
import { Link } from 'react-router-dom';


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
        {notes.map((note) => {
          return <p key={note.id}>{note.title}</p>
        })}
      </div>
    </Container>
    
  )
}
