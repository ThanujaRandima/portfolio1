import { Typewriter } from 'react-simple-typewriter';
import { Github } from 'lucide-react'

export const Herosection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl">
                    <Typewriter 
                    words = {["Hi, i'm Thanuja","Developer", "Designer", "Frontend", "Backend", "UI/UX"]}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    />
                </h1>

                <p className='text-[16px] opacity-0 animate-fade-in-delay-3 pt-2'>I craft modern and scalable web applications combining full stack expertise with a focus on performance and user experience</p>
                
                <div className='pt-5 opacity-0 animate-fade-in-delay-4'>
                  <a href="#projects" className='cosmic-button'> 
                    View my work
                  </a>
                </div>
            </div>
        </div>
    </section>
  )
}

 