import React from 'react'
import useStyles from './MasterLayout.styles'
import Routes from '../route'
import Drawer from './drawer'

export default function MasterLayout() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Drawer />
      {/* <Routes /> */}
    </div>
  )
}
