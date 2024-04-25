import React from 'react'

interface Props {
  text: string;
  type: string;
  last: boolean;
}

function ClockItem({ text, type, last = false }: Props) {

  return (
    <div className='flex flex-row justify-center items-center'>
      <div className='flex flex-col items-center font-bold text-[2rem] leading-[2.5rem] uppercase text-[#FFFFFF] text-center' 
        style={{
          fontFamily: `'Clash Display', sans-serif`
        }}>
        <div className="border-y-[1px] border-x-0 border-[#EEEFF0] rounded-lg font-bold text-[2rem] leading-[2.5rem] uppercase text-[#FFFFFF] text-center py-2 px-1">
          { text }
        </div>
      </div>      
      { !last && 
          <div className='mx-1 font-bold text-[2rem] leading-[2.5rem] uppercase text-[#FFFFFF] text-center'>
              { ':' }
          </div>
        }
    </div>
  )
}

export default ClockItem
