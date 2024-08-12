export const NavbarItem=({icon,label})=>{
    return(
        <div className="flex items-center px-[10px] py-[6px] gap-[5px] text-[#FFFFFF] border  border-[#017EFA] rounded-[10px]">
            <div>
                <img src={icon} alt="icon" />
            </div>
            <div>{label}</div>
        </div>
    )
}