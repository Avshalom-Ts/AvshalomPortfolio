import React, { useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    
    
    
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1,duration: 1.5}
        )
        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger:{
                    trigger: card
                }
            }
        )
    })
    },[])

  return (
    <section id='works' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
            {/* LEFT */}
            <div className='first-project-wrapper' ref={project1Ref}>
                <div className='image-wrapper'>
                    <img src='/images/anydashy-app.png' alt='Ryde'/>
                </div>
                <div className='text-content'>
                    <h2>A customizable personal dashboard meets social media.</h2>
                    <p className='text-white-50 md:text-xl'>
                        This app is a user-centric dashboard platform designed for both self-management and social interaction. Once signed in, 
                        users can personalize their experience by installing modular add-ons — small feature packs that extend the dashboard’s functionality. 
                        Whether it’s productivity tools, social features, or interactive widgets, users can build the dashboard that suits their unique needs.
                    </p>
                    <strong>Built with modern web technologies including Angular, NestJS, and PostgreSQL.</strong>
                </div>
            </div>
            {/* RIGHT */}
            <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src='/images/project2.png' alt='Library Managment Platform'/>
                    </div>
                    <h2>Library Managment Platform</h2>
                </div>
                <div className='project' ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7db]'>
                        <img src='/images/project3.png' alt='YC Directory'/>
                    </div>
                    <h2>YC Directory - A Startup Showcase App</h2>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection