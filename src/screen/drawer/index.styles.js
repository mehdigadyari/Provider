import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 500,
    height: 'auto',
    backgroundColor: '#BDBDBD',
    margin: 'auto',
    marginTop: 200,
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
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    padding: 10,
    textAlign: 'right'
  },
  button: {
    marginTop: 20
  }
}))
