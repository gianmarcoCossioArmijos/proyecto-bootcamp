import React from 'react'

import ilustration from "../../assets/illu_landing.png"

const Hero = () => {
  return (
    <>
        <section className='w-full px-14 py-5 my-20 flex gap-6'>
            <div className='w-1/2 flex flex-col gap-6 my-auto animate-fade-right animate-delay-500 animate-ease-linear'>
                <h1 className='font-bold text-6xl'>
                    Aprende las tecnologias mas
                    demandadas en el mejor lugar
                </h1>
                <h5>
                    Registrate y obten un descuento especial
                </h5>
                <button className='w-1/2 px-4 py-2 bg-[#4E4FEB] hover:bg-[#393ab3] rounded-lg text-[#EEEEEE] hover:text-white'>Registrarme</button>
            </div>

            <div className='w-1/2 animate-fade-left animate-delay-500 animate-ease-linear'>
                <img
                    className='w-2/3 m-auto'
                    src={ilustration}
                    alt="ilustracion"
                    />
            </div>
        </section>
    </>
  )
}

export default Hero