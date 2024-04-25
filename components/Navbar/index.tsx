import Image from 'next/image'
import React from 'react'
import SubtractLine from '@/public/assets/images/subtract.png';
import Logo from '@/public/assets/images/logo.svg';
import UpArrow from '@/public/assets/images/uparrow.png';
import ConnectWalletBtn from '@/public/assets/images/connect-wallet-btn.svg';

interface Props {}

function Navbar(props: Props) {
  const {} = props

  return (
    <div className='relative mt-6'>
      <Image
        src={SubtractLine}
        alt='Subtract Line'
      />
      <div className='absolute top-0 w-full h-full'>
        <div className='w-9/12 h-full mx-auto'>
          <div className='max-h-[80%] flex justify-between items-center top-0'>
            <Image
              src={Logo}
              alt='Logo'
              style={{
                maxHeight: '100%'
              }}
            />
            <div className='flex flex-row items-center text-[#EEEFF0] uppercase text-xs gap-10 max-h-[100%]'>
              <div>Games</div>
              <div>Tournaments</div>
              <div>Market Place</div>
              <div>Dao</div>
              <div>Support Hub</div>
              <div className='flex flex-row items-center gap-2'>
                <div>About</div>
                <Image
                  src={UpArrow}
                  alt='Up Arrow'
                />
              </div>
              <Image
                src={ConnectWalletBtn}
                alt='Connect Wallet'
                style={{
                  maxHeight: '100%'
                }}
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
