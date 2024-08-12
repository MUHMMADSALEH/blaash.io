import { NavbarItem } from "./NavbarItem";
import { NavbarItemData } from "../data/Navbar_Item";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <div className="flex items-center  w-full px-[10px] py-[15px] bg-[#27272F]  rounded-lg ">
      <div
        className="w-[40%] 
text-[#FFFFFF]  font-[Rubik] font-bold"
      >
        Design Studio
      </div>

      <div className="w-[60%] flex justify-between items-center ">
        {NavbarItemData.map((item) => (
          <NavbarItem icon={item.icon} label={item.label} />
        ))}
        
        <div><SearchBar/></div>
        <div>notification icon</div>
        <div>profile</div>
      </div>
    </div>
  );
};
