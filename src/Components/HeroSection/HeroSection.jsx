function HeroSection() {
  return (
    <div className="rounded-lg p-8 text-white shadow-lg">
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <div className="w-[150px] overflow-hidden rounded-full border-4 border-white shadow-md sm:w-[300px]">
          <img
            src="/image.jpg"
            alt="Sagar Manchakatla"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center sm:ml-20 sm:text-left">
          <h1 className="text-3xl font-bold italic">I'm Sagar Manchakatla</h1>
          <p className="mt-2 text-lg">Web Developer, AI/ML Enthusiast</p>
        </div>
      </div>
      <div className="mt-[55px] font-light">
        <p className="text-lg font-light leading-relaxed sm:text-xl">
          I am a dedicated and enthusiastic student currently delving into the
          intricacies of{" "}
          <span className="font-bold text-blue-200 underline hover:text-blue-400">
            <a
              href="https://www.geeksforgeeks.org/what-is-full-stack-development/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Development
            </a>
          </span>{" "}
          , while also exploring the rapidly evolving fields of{" "}
          <span className="font-bold text-blue-200 underline hover:text-blue-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Artificial Intelligence and Machine Learning
            </a>
          </span>
          . My insatiable curiosity and passion for technology fuel my drive to
          continuously enhance my skill set and tackle new challenges head-on. I
          thrive on the thrill of solving complex problems and am always on the
          lookout for opportunities to apply my skills to real-world projects. I
          am eager to collaborate with like-minded individuals and contribute to
          innovative solutions that can make a positive impact.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
