import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#1a222a',
    margin: 'auto',
    marginTop: 100,
    padding: 25,
    '&:focus': {
      outline: 'none'
    },
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    }
  },
  inputContainer: {
    backgroundColor: '#2a3a48',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    border: '1px solid #203d75'
  },
  input: {
    padding: 10,
    textAlign: 'right'
  },
  button: {
    marginTop: 20
  },
  table: {
    minWidth: 650
  },
  Edit: {
    cursor: 'arrow',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: 500,
    height: 'auto',
    backgroundColor: '#212121',
    margin: 'auto',
    marginTop: 200,
    padding: 25,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],

    '&:focus': {
      outline: 'none'
    },
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    }
  }
}))
