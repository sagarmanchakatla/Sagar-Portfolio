// import BackGroundGradient from "../BackGroundGradient";

function Footer() {
  return (
    <div className="relative mt-20 flex items-center justify-center p-10 text-[#caccd3]">
      <h1 className="">@sagarmanchakatla</h1>
      <BackGroundGradient />
    </div>
  );
}

function BackGroundGradient() {
  return (
    <>
      <div className="absolute -bottom-40 left-20 -z-10 h-[140px] w-[100px] rounded-full bg-green-400 bg-opacity-50 blur-3xl sm:h-[140px] sm:w-[250px]" />

      <div className="absolute -bottom-40 -z-10 h-[140px] w-[100px] translate-x-[10%] rounded-full bg-blue-300 bg-opacity-50 blur-3xl sm:h-[140px] sm:w-[250px]" />

      <div className="absolute -bottom-40 left-0 right-0 -z-10 mx-auto h-[140px] w-[100px] rounded-full bg-purple-400 bg-opacity-50 blur-3xl sm:h-[140px] sm:w-[250px]" />

      <div className="absolute -bottom-40 right-0 -z-10 h-[140px] w-[100px] -translate-x-[70%] rounded-full bg-red-500 bg-opacity-50 blur-3xl sm:h-[140px] sm:w-[250px]" />

      <div className="absolute -bottom-40 right-0 -z-10 h-[140px] w-[100px] rounded-full bg-yellow-500 bg-opacity-50 blur-3xl sm:h-[140px] sm:w-[250px]" />

      {/*
        <div className="absolute -top-5 -z-10 h-[140px] w-[100px] rounded-full border-r-blue-400 blur-[120px] sm:h-[120px] sm:w-[250px]"></div> */}
    </>
  );
}

export default Footer;
