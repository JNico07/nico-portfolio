import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('nicojayolano@gmail.com');
        
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

  return (
    <section id="about" className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:gap-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-2">
                
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
    
                    <div>
                        <p className="grid-headtext">Hi, I&apos;m Jay Nico.</p>
                        <p className="grid-subtext">I am a Computer Science college student, have a knowledge in Mobile and Web Developnent, and a passionate learner.</p>
                    </div>
                </div>

            </div>

            <div className="col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>

                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I have knowledge in Java, HTML, CSS, JavaScript, React, Node.js, Android Studio, Firebase and MongoDB.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <div className="rounded-3xl sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 14.5995, lng: 120.9842,
                                text: "I'm here!",
                                color: 'white',
                                size: 1.5,
                            }]}
                            labelColor={(d) => d.color}
                            labelSize={(d) => d.size} 
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">Let&apos;s Connect</p>
                        <p className="grid-subtext">I am always open to new opportunities and collaborations.</p>
                    </div>
                    <div>
                        <a href="#email.me" className="w-fit">
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                    <div>
                        <p className="grid-headtext">My Passion for coding</p>
                        <p className="grid-subtext">Coding is my passion, and I am always eager to learn new skills and technologies to improve my skills and knowledge.</p>
                    </div>
                </div>
            </div>

            <div id="email.me" className="xl:col-span-1 xl:row-span-1">
                <div className="grid-container">
                    <img src="assets/grid4.png" alt="grid-4" className="w-full sm:h-[226px] h-fit object-cover sm:object-top"/>

                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact Me</p>

                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy"/>

                            <p className="lg:text-2xl md:text-xl font-medium text-gray-gradient text-white">nicojayolano@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About