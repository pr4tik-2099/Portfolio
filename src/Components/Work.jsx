import react from 'react';
import Med_Space from "../assets/Med_Space.png";
import Ems from "../assets/Employye.png";
import School from "../assets/School.png";
import JWT_API from '../assets/JWT_Login.png';
function Work() {
    const projects = [
        {
            id: 1,
            title: "MED REPORT SPACE",
            img: Med_Space,
            Desc: "It is a secure web-based platform for digitizing, storing, and managing diverse medical reports. Implemented with analytical tools to visualize health trends, easy and Simple UI so that users can use without any tutorial",
            Tecnologies: ["C#", "ASP.NET Web Forms", "SQL Server", "Machine Learning", "HTML", "CSS", "JavaScript", "Chart.js", "Bootstrap", "ADO.NET", "JQuery"],
            github: "https://github.com/pr4tik-2099/MedReportSpace",
            Link: "https://medreportvault.bsite.net/"

        },
        {
            id: 2,
            title: "COMPANY EMPLOYEE INFO",
            img: Ems,
            Desc: "It is a employee management web app that allows organizations to efficiently manage employee data, track salary, and generate reports. The system provides a user-friendly interface for HR personnel to add, update, and delete employee records.",
            Tecnologies: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap", "LINQ", "Razor Pages"],
            github: "https://github.com/pr4tik-2099/ASP_coreApp"
        },
        {
            id: 3,
            title: "SCHOOL MANAGEMENT",
            img: School,
            Desc: "It is a school management Desktop App that allows principals to efficiently manage school data, track fees, and generate reports. The system provides a user-friendly interface for principal add, update, and delete students and teachers records.",
            Tecnologies: ["C#", "ASP.NET Windows Forms", "ADO.NET", "SQL Server", "GUNA UI"],
            github: "https://github.com/pr4tik-2099/School-Management--System"
        },
        {
             id: 4,
            title: "JWT Login Authentication API",
            img: JWT_API,
            Desc: "It is a secure modern user authentication API with Json Web token-based security and a responsive frontend interface",
            Tecnologies: ["C#", "ASP.NET Core Web API", "JWT", "SQL Server", "Axios", "React js", "Tailwind CSS", "Entity Framework Core"],
            github: "https://github.com/pr4tik-2099/JWT-Login-API",

        }
    ]
    return (
        <>
            <section id="work" className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[5vw] font-sans relative'>
                <div className='text-center'>
                    <h2 className='text-white text-4xl font-bold mb-15'>WORKS</h2>
                </div>

                {/* project cards */}
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {projects.map((project) => (
                        <div key={project.id}
                            className='border-2 border-white bg-gray-900 backdrop-blur-md shadow-2xl overflow-hidden cursor-pointer hover:shadow-green-500/50 hover:-translate-y-2 transition-transform duration-300 hover:border-purple-500'
                        >
                            <div className='p-4'>
                                <img src={project.img} alt={project.title} className='w-full h-50 object-cover' />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-xl font-bold mb-4 text-green-400 px-4 text-center'>{project.title}</h3>
                                <p className='text-gray-500 mb-4 pt-4 line-clamp-3'>
                                    {project.Desc}
                                </p>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-1 w-full mr-3'>Github</a>
                                <a href={project.Link} target="_blank" rel="noopener noreferrer" className='bg-cyan-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-1 w-full'>Website</a>
                                <div className='mt-4'>
                                    {project && project.Tecnologies.map((Tech, index) => (
                                        <span
                                            key={index}
                                            className="inline-block bg-[#251f38] text-xs font-semibold text-green-500 px-2 py-1 mr-2 mb-2">
                                            {Tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Work;