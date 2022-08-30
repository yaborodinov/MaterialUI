import React from 'react'
import { Typography } from '@mui/material'

export default function Create() {
  return (
    <div>
      <Typography
        variant="h3"
        component="h1"
        color="primary"
        align="center"
        gutterBottom
      >
        Create a new Note
      </Typography>
      <Typography
        color="secondary"
        noWrap={true}
        gutterBottom
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi mollitia ad odit odio cum illum quisquam soluta minima itaque rerum. Dolorum quam minima mollitia maiores, assumenda error asperiores quae explicabo! Quidem iure suscipit explicabo nam molestias illo doloribus saepe consequatur, numquam dolore dignissimos nostrum commodi?
      </Typography>
      <Typography
        color="textSecondary"
      >
        Save
      </Typography>
    </div>
  )
}
