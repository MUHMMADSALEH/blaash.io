import { MenuList } from "../data/Navigation";
import { MenuItem } from "./MenuItem";

export const LeftMenuBar = () => {
  return (
    <div className=" relative flex flex-col gap-10 p-8 min-h-screen bg-[#27272F] text-white rounded-2xl">
      <div className="flex justify-between">
        <div>
          <img
            src="./assets/logo.svg"
            alt="logo"
            className="bg-[#27272F] w-[6rem]  text-white"
          />
        </div>
        <div className="w-full     ">
          <img src="./assets/Slider_icon.svg" alt="Slider-icon" className="absolute top-9 -right-3 bg-[#27272F] rounded-full p-1 "/>
        </div>
      </div>
      {MenuList.map((item) => (
        <MenuItem icon={item?.icon} label={item.label} subMenu={item.subMenu} />
      ))}
    </div>
  );
};
