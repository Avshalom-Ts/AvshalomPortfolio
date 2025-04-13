import React from 'react'
import { counterItems } from '../constants/index.js'
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg md:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols'>
        {
            counterItems.map((item,index) => (
                <div className='bg-zinc-900 rounded-lg p-10 flex flex-col' key={index}>
                    <div className='counter-number text-white text-5xl font-bold mb-2'>
                        {/* 0 {item.suffix} */}
                        <CountUp suffix={item.suffix} end={item.value}/>
                    </div>
                    <div className='text-white-50 text-lg'>{item.label}</div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default AnimatedCounter