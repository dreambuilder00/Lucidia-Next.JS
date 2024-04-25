import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar'
import BGDahboard from '@/public/assets/images/bg_home1.png';
import TexturedText from '../TexturedText';
import NFTTotal from '../NFTTotal';

interface Props {}

function Dashboard(props: Props) {
  const {} = props

  return (
    <div className='relative w-full'>
      <Image
        src={BGDahboard}
        alt='Background Image for Dashboard'
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        priority={true}
      />
      <div className='absolute top-0'>
        <Navbar />
        <div className='w-9/12 mx-auto mt-16'>
          <TexturedText
            texts={['Participate On', 'The Exclusive Nft Drop']}
            patternUrl={'/assets/images/watercolor-texture.png'}
            className="font-bold uppercase text-5xl leading-tight text-white"
            style={{
              fontFamily: `'Clash Display', sans-serif`
            }}
          />
          <TexturedText
            texts={['Curse of the pharaoh']}
            patternUrl={'/assets/images/watercolor-texture.png'}
            className="font-semibold uppercase text-[5rem] leading-[6rem] text-black"
            style={{
              fontFamily: `'Clash Display', sans-serif`
            }}
          />
          <NFTTotal />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
