import React from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import useStyles from './index.styles'
export default function Index() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="body2">اطلاعات تکمیلی کراولر </Typography>

      <Button
        fullWidth
        className={classes.button}
        variant="outlined"
        color="default"
      >
        دریافت و نمایش رزومه
      </Button>
    </div>
  )
}
