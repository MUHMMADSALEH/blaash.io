import { useState } from "react";

export const MenuItem = ({ icon, label, subMenu }) => {
  const [showSubList, setShowSubList] = useState(false);
 
  return (
    <div className="flex flex-col items-center justify-between gap-2">
      <div className="w-full flex justify-between items-center gap-3">
        <div className="flex items-center gap-2">

        <div>
          <img src={icon} alt="content-logo" />
        </div>
        <div className={`flex flex-col items-center `}>

        <div>{label}</div>
        </div>
        </div>
      {subMenu && (
        <div
          className=" text-center"
          onClick={() => setShowSubList(!showSubList)}
        >
          <img src={`./assets/Stroke 1.svg`} alt="stroke" className={`${showSubList?'rotate-180':'rotate-360'}`} />
        </div>
      )}
      </div>
      {showSubList &&
        subMenu.map((subItem:any, index:any) => (
          <div  className="px-[6px] py-[10px] bg-[#5A5A68] rounded-[6px] w-full" key={index}>{subItem?.label}</div>
        ))}
    </div>
  );
};
