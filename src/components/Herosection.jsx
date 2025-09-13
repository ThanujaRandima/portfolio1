import { Typewriter } from 'react-simple-typewriter';


export const Herosection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl">
                    <Typewriter 
                    words = {["Developer", "Designer", "Frontend", "Backend", "UI/UX"]}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    />
                </h1>
            </div>
        </div>
    </section>
  )
}

 