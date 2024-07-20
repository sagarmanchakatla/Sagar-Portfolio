function Card({ item, key }) {
  return (
    <div className="mb-2 flex items-center gap-2 p-2 text-white transition duration-500 hover:scale-110 sm:flex-col">
      <div className="w-[70px] overflow-hidden sm:w-[130px]">
        <img src={item.img} alt="" />
      </div>
      <div className="text-sm sm:w-[130px]">
        <a href={item.redirect} className="font-lg text-[17px] underline">
          {item.title}
        </a>
        <p className="w-[180px] text-[#caccd3]">{item.desc}</p>
        <p className="w-[180px] text-[#727888]">{item.tech}</p>
      </div>
    </div>
  );
}

export default Card;
