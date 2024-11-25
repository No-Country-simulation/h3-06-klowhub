import React from 'react'

interface LogoProps {
    size?: string;
    color?: string;
}

const Logo = ({size='text-4xl', color='text-white'} : LogoProps) => {
  return (
    <div className={`${size} ${color} font-bold`}>
        KlowHub
    </div>
  )
}

export default Logo