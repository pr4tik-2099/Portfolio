import react from 'react';
import RNS from "../assets/RNS.webp"
import SVU from "../assets/SVU.png"
import IA from "../assets/IA.png"

function Education()
{
    const educationData = [
        {
            id:0,
            img:SVU,
            Institution:"Swami Vivekanand University",
            Degree:"Bachelor of Technology in Computer Applications - BCA",
            Year:"2022 - 2025",
            Grade:"8 CGPA"            
        },
        {
            id:1,
            img:RNS,
            Institution:" Sri R.N.Singh Memorial High School",
            Degree:"Higher Secondary Education - 12th",
            Year:"2021 - 2022",
            Grade:"76 %"
        },
        {
            id:3,
            img:IA,
            Institution:"Indira Gandhi Memorial Academy",
            Degree:"Secondary Education - 10th",
            Year:"2019 - 2020",
            Grade:"70 %"
        }
    ]
    return(
        <>
           <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.Institution}
                className="w-full h-full object-cover rounded-full"
              />
            </div> */}

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 border border-purple-500 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.Institution}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-green-400">
                      {edu.Degree}
                    </h3>
                    <h4 className="text-md sm:text-2sm text-gray-300">
                      {edu.Institution}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.Year}</p>
                </div>
              </div>

              <p className="mt-4 text-purple-500 font-bold">Grade: {edu.Grade}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
        </>
    );
}

export default Education;