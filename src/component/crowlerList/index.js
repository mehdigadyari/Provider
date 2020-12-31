import React, { useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {
  Backdrop,
  Button,
  Container,
  Fade,
  Modal,
  TextField,
  Typography
} from '@material-ui/core'
import useStyles from './index.styles'
import { useHistory } from 'react-router-dom'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('jobinja', 159, 6.0, 24, 4.0),
  createData('Ice', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

export default function BasicTable() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  let history = useHistory()

  function handleClick() {
    history.push('/listEdit')
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container>
      <TableContainer className={classes.root} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>لیست کراولرها</TableCell>
              <TableCell align="right">نام کاربری</TableCell>
              <TableCell align="right">نام کاربری</TableCell>
              <TableCell align="right">نام کاربری</TableCell>
              <TableCell align="right">اکشن ها</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  className={classes.Edit}
                  onClick={handleClick}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={handleOpen}
        fullWidth
        className={classes.button}
        variant="outlined"
        color="primary"
      >
        صفحه افزودن کراولرها
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        overlayStyle={{ backgroundColor: 'transparent' }}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="body2">تلفن همراه</Typography>
            <TextField
              classes={{ root: classes.inputContainer }}
              variant="filled"
              fullWidth
              size="medium"
              inputProps={{ className: classes.input }}
            />
            <Typography variant="body2">رمز عبور</Typography>
            <TextField
              classes={{ root: classes.inputContainer }}
              variant="filled"
              fullWidth
              size="medium"
              inputProps={{ className: classes.input }}
            />
            <Button
              fullWidth
              className={classes.button}
              variant="outlined"
              color="default"
            >
              ورود
            </Button>
          </div>
        </Fade>
      </Modal>
    </Container>
  )
}
