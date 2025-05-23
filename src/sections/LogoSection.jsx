import React from 'react'
import { logoIconsList } from '../constants'

const LogoSection = () => {
  
    const LogoIcon = ({icon})=>{
        return (
            <div className='flex-none flex-center marquee-item'>
                <img src={icon.imgPath} alt={icon.name}/>
            </div>
        )
    }
  
    return (
    <div className='md:my-12 my-10 relative'>
        <div className='gradient-edge'/>

        <div className='marquee h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
                {/* The logo list loop */}
                {logoIconsList.map((icon,index) => (
                    <LogoIcon key={index} icon={icon}/>
                ))}
                {/* To iteret infenatly */}
                {logoIconsList.map((icon,index) => (
                    <LogoIcon key={index} icon={icon}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoSection