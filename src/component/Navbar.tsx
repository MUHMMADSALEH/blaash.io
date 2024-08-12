import { NavbarItem } from "./NavbarItem";
import { NavbarItemData } from "../data/Navbar_Item";

export const Navbar = () => {
  return (
    <div className="flex  w-full px-[10px] py-[15px] bg-[#27272F]  rounded-lg ">
      <div
        className="w-[40%] 
text-[#FFFFFF]  font-[Rubik]"
      >
        Design Studio
      </div>

      <div className="w-[60%] flex justify-between ">
        {NavbarItemData.map((item) => (
          <NavbarItem icon={item.icon} label={item.label} />
        ))}
        <div>search bar</div>
        <div>notification icon</div>
        <div>profile</div>
      </div>
    </div>
  );
};
