import Image from "next/image";
import { ReactNode } from "react";

interface IconProps {
  icon: ReactNode; // Assuming `icon` is a ReactNode, adjust as needed
  text: string;
}

const Icon: React.FC<IconProps> = ({ icon, text }) => {
  return (
    <div className="my-4 group w-[125px] h-[100px] rounded-md flex flex-col items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:bg-white">
      <div className="flex flex-col g-6 justify-center items-center">
        <span
          className="transition-all duration-300 group-hover:text-orange-500"
          style={{
            fontSize: "4rem",
          }}
        >
          {icon}
        </span>
        <p className="transition-all duration-300 group-hover:text-orange-500">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Icon;
