import { RiReactjsLine } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-2">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
          <TbSql className="text-5xl text-orange-400" />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-5xl text-green-500" />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-5xl text-green-400" />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-5xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
