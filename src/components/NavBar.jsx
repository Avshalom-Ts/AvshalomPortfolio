import React, { useEffect,useRef  } from 'react'
import { useState } from 'react'
import { navLinks } from '../constants'
import lottieWeb from 'lottie-web';

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    const iconContainer = useRef(null);
    useEffect(() => {
    const animation = lottieWeb.loadAnimation({
      container: iconContainer.current,
      path: '/images/logos/Github-white.json', // Make sure this path is correct
      renderer: 'svg',
      loop: true,
      autoplay: true,
      name: 'Demo Animation',
    });

    return () => animation.destroy(); // Cleanup on unmount
  }, []);


    return (
    <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
        <div className='inner'>
            <a className='logo' href='#hero'>
                Avshalom | Z
            </a>
            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline'/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='flex justify-end gap-2'>
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>Contact me</span>
                </div>
            </a>
                <a href='https://github.com/Avshalom-Ts' target='_blank' className='relative bg-white w-12 h-12 overflow-hidden rounded-lg'>
                    <div ref={iconContainer} className="w-full h-full"></div>
                </a>
            </div>
        </div>
    </header>
  )
}

export default NavBar