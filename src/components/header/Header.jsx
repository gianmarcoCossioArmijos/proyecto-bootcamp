import React from 'react'

import LogoIcon from './IconLogo'

const Header = () => {
  return (
    <>
        <header className='w-full px-5 py-4 flex justify-between bg-[#4E4FEB] text-[#EEEEEE]'>
            <div className='flex gap-1'>
                <LogoIcon />
                <span className='font-bold text-lg my-auto'>cursapp</span>
            </div>

            <div className='flex gap-5'>
                <a className='my-auto hover:text-white hover:font-bold' href="">Nosotros</a>
                <a className='my-auto hover:text-white hover:font-bold' href="">Cursos</a>
            </div>

            <div className='flex gap-3'>
                <button className='px-4 py-2 bg-[#000000] hover:bg-[#07001f] rounded-lg'>Registrarse</button>
                <button className='px-4 py-2 bg-[#000000] hover:bg-[#07001f] rounded-lg'>Ingresar</button>
            </div>
        </header>
    </>
  )
}

export default Header