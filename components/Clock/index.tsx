import React from 'react'
import ClockItem from './ClockItem'

interface Props {}

function Clock(props: Props) {
  const {} = props

  return (
    <div className='flex flex-row justify-center items-center'>
      <ClockItem text={'00'} type={'hour'} last={false}/> 
      <ClockItem text={'00'} type={'minute'} last={false}/>
      <ClockItem text={'00'} type={'second'} last={true}/>
    </div>
  )
}

export default Clock
