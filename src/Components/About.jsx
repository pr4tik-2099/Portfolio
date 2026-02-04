import react from 'react';
import ReactTypingEffect from 'react-typing-effect';


const About = () =>
{
    return(
        <>
            <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-30'>
                <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                    {/* left side */}
                    <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                        <h3 className="text-3xl sm:text-4xl md:text-3xl font-semibold text-white mb-2 leading-tight">
                            Hi, Myself
                        </h3>
                        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-green-400 font mb-4 leading-tight hover:scale-150 duration-600">
                            PRATIK MAHATO
                        </h2>
                        {/* <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tigh'>
                             <ReactTypingEffect text={["Dotnet Developer", "Full Stack Developer"]} speed={100} typingDelay={500} eraseDelay={2000} cursorRenderer={
                                (cursor) => <span className="text-white">{cursor}</span> 
                            }/>
                           
                        </h2> */}
                        <h4 className='text-white text-2xl'>
                            I am a <span className='text-[#7245ec] text-4xl font-semibold'> Full Stack Developer </span>
                           
                        </h4>
                    </div>

                    {/* right side */}
                    <div className='md:wd-1/2 flex justify-center md:justify-end'>
                        <div>
                                
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;