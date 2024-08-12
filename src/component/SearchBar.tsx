export const SearchBar=()=>{
    return(
        <div className="flex  items-center gap-[20px] p-1 border border-[#C0C0D680] rounded-[10px] ">
            <div ><input type="text" name="search" placeholder="Search Project...." className="inline-block bg-[#27272F] py-1 px-1 focus:outline-none text-[14px] font-[Rubik] font-normal" /></div>
            <div className="border rounded-md w-[28px] p-1 border border-[#C0C0D680]"><img src="./assets/search-normal.svg" alt="icon" /></div>
        </div>
    )
}