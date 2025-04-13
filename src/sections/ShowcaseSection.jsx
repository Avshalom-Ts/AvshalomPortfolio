import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
            {/* LEFT */}
            <div className='first-project-wrapper'>
                <div className='image-wrapper'>
                    <img src='/images/project1.png' alt='Ryde'/>
                </div>
                <div className='text-content'>
                    <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                    <p className='text-white-50 md:text-xl'>
                        An app build with React Native, Expo and TailwindCSS for a fast user-friendly experience.
                    </p>
                </div>
            </div>
            {/* RIGHT */}
            <div className='project-list-wrapper overflow-hidden'>
                <div className='project'>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src='/images/project2.png' alt='Library Managment Platform'/>
                    </div>
                    <h2>Library Managment Platform</h2>
                </div>
                <div className='project'>
                    <div className='image-wrapper bg-[#ffe7db]'>
                        <img src='/images/project3.png' alt='YC Directory'/>
                    </div>
                    <h2>YC Directory - A Startup Showcase App</h2>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection