import { skills } from "../../skills";

const Skills = () => {
  return (
    <div className="mt-20 text-white">
      <div className="mb-5">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-2 h-1 w-full bg-gradient-to-r from-purple-400 to-blue-500"></div>
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-semibold text-[#727888]">Frontend</h3>
        <div className="mt-7 grid grid-cols-2 gap-10 sm:grid-cols-3">
          {skills.frontend.map((skill, index) => (
            <div
              key={index}
              className="mb-2 flex flex-col items-center gap-2 p-2 text-white transition duration-500 hover:scale-110"
            >
              <div className="h-32 w-32 overflow-hidden">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-lg text-[17px] font-bold">{skill.title}</p>
                {skill.desc && <p className="text-[#caccd3]">{skill.desc}</p>}
                {skill.tech && <p className="text-[#727888]">{skill.tech}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="mb-4 text-2xl font-semibold text-[#727888]">Backend</h3>
        <div className="mt-7 grid grid-cols-2 gap-10 sm:grid-cols-3">
          {skills.backend.map((skill, index) => (
            <div
              key={index}
              className="mb-2 flex flex-col items-center gap-2 p-2 text-white transition duration-500 hover:scale-110"
            >
              <div className="h-32 w-32 overflow-hidden">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-lg text-[17px] font-bold">{skill.title}</p>
                {skill.desc && <p className="text-[#caccd3]">{skill.desc}</p>}
                {skill.tech && <p className="text-[#727888]">{skill.tech}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
