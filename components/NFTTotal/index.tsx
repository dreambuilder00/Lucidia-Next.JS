import React from 'react'
import Clock from '../Clock'

interface Props {}

function NFTTotal(props: Props) {
  const {} = props

  return (
    <div className='flex flex-row gap-14 justify-start mt-32 items-start'>
      <Clock />
      <div className='mt-[2.25rem] border-[1px] h-0 border-[#EEEFF0] rotate-90 w-[4.5rem] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'></div>
    </div>
  )
}

export default NFTTotal
