'use client'
import React from 'react'
import Dashboard from '../Dashboard'
import Description from '../Description'
import Benefits from '../Benefits'
import Contact from '../Contact'

interface Props {}

function Home(props: Props) {
  const {} = props

  return (
    <>
      <Dashboard />
      <Description />
      <Benefits />
      <Contact />
    </>
  )
}

export default Home
