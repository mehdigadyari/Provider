import React from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import useStyles from './SignIn.styles'
import { useHistory } from 'react-router-dom'

export default function SignIn() {
  const classes = useStyles()
  let history = useHistory()

  function handleClick() {
    history.push('/list')
  }

  return (
    <div className={classes.root}>
      <Typography variant="body2">تلفن همراه</Typography>
      <TextField
        id="outlined-basic"
        label="نام کاربری"
        variant="outlined"
        fullWidth
        size="medium"
        classes={{ root: classes.inputContainer }}
      />
      <Typography variant="body2">رمز عبور</Typography>
      <TextField
        id="outlined-basic"
        label="رمز عبور"
        variant="outlined"
        fullWidth
        size="medium"
        classes={{ root: classes.inputContainer }}
      />
      <Button
        onClick={handleClick}
        fullWidth
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        ورود
      </Button>
    </div>
  )
}
