import React from 'react'
import Clock from '../Clock'

interface Props {}

function NFTTotal(props: Props) {
  const {} = props

  return (
    <div className='flex flex-row gap-14 justify-start mt-32 items-start'>
      <Clock />
      <div className='mt-[2.25rem] border-[1px] h-0 border-[#EEEFF0] rotate-90 w-[4.5rem] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'></div>
      <div className='uppercase text-[#FFFFFF] font-bold'
        style={{
          fontFamily: `'Clash Display', sans-serif`
        }}>
        <div>Airdrop</div>
        <div className='mt-4'>
          <div><span className='text-[#0ED4FF]'>$20,000</span> Worth</div>
          <div>of nft in total</div>
        </div>
      </div>
    </div>
  )
}

export default NFTTotal
