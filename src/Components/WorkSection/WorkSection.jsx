import { workData } from "../../data";
import Card from "./Card";
function WorkSection() {
  return (
    <div className="mt-[140px] text-white">
      <div className="">
        <p className="text-3xl font-bold uppercase text-[#caccd3]">
          Current Work
        </p>
        <div className="mt-2 h-1 w-full bg-gradient-to-r from-purple-400 to-blue-500"></div>
      </div>
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-3">
        {workData.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default WorkSection;
