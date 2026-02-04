import react from 'react';

function Skills() {
    const skillsinfo = [
        {
            title: "Programming Languages",
            skills: ["C", "C#", "Java", "PHP", "JavaScript"]
        },
        {
            title: "Frameworks",
            skills: ["ReactJS", "NodeJS", "ExpressJS", "ASP.NET", "ASP.NET Core MVC", "ASP.NET Core Web API"]
        },
        {
            title: "Databases",
            skills: ["MySQL", "MongoDB", "MS SQL Server","Azure SQL"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "GitHub", "Visual Studio Code", "Visual Studio", "XAMPP", "Postman", "Tailwind CSS", "Bootstrap", "Entity Framework Core", "RESTful APIs"]
        }
    ]
    return (
        <>
            <section className=''  id="skills">
                <div className='text-center'>
                    <h2 className='text-4xl font-bold mt-20 text-white mb-2'>SKILLS</h2>
                </div>
                {/* {Skills categories} */}
                <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-center'>
                    {skillsinfo.map((category) => (
                        <div key={category.title} className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[40%] border-2 border-purple-500 
                             shadow-[0_0_20px_1px_rgba(0,255,100,0.3)]'>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-purple-500 mb-2 text-center">
                                {category.title}
                            </h3>
                            <div className='flex flex-wrap gap-1 lg:gap-2 py-10 justify-center -mt-5'>
                                {category.skills.map((skill) => (
                                    <div key={skill} className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 py-2 px-2 sm:py-2 sm:px-2 text-center text-green-400 font-semibold hover:bg-emerald-400 hover:text-gray-900 hover:scale-110 duration-600 cursor-pointer hover:border-0'>
                                        <span className='gap-3 grid text-lg pl-3 pr-3'>{skill}</span>
                                    </div>
                                ))}
                            </div>

                            {/* <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-green-400 py-2 px-2 sm:py-2 sm:px-2 text-center text-green-500 mt-5'><span className='gap-3 grid'>{category.skills}</span></div> */}


                            {/* {Skills} */}
                            {/* <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
                                {skillsinfo.map((skill)=>(
                                    <div key={skill.Skills} className='text-white'>
                                        <h4 className='text-white'>{skill.Skills}</h4>
                                    </div> 
                                ))}
                            </div> */}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Skills;