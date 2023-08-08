import React from 'react'

const Header = () => {
  return (
    <>
        <header className='w-full px-5 py-4 flex justify-between bg-[#4E4FEB] text-[#EEEEEE]'>
            <div className='flex'>
                <h1 className='my-auto'>Logo</h1>
            </div>

            <div className='flex gap-3'>
                <a className='my-auto' href="">Nosotros</a>
                <a className='my-auto' href="">Cursos</a>
            </div>

            <div className='flex gap-3'>
                <button className='px-4 py-2 bg-[#000000] rounded-lg'>Registrarse</button>
                <button className='px-4 py-2 bg-[#000000] rounded-lg'>Ingresar</button>
            </div>
        </header>
    </>
  )
}

export default Header