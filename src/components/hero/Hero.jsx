import React from 'react'

import illu_landing from "../../assets/illu_landing.png"

const Hero = () => {
  return (
    <>
        <section className='w-full px-10 py-5 flex gap 5'>
            <div className='w-1/2'>

            </div>

            <div className='w-1/2'>
                <img
                    className='w-2/3 m-auto'
                    src={illu_landing}
                    alt="ilustracion"
                    />
            </div>
        </section>
    </>
  )
}

export default Hero