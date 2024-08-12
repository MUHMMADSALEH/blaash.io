export const SearchBar=()=>{
    return(
        <div className="flex w-full items-center gap-[20px] bg-[#27272F]">
            <div><input type="text" name="search" placeholder="Search Project...." /></div>
            <div><img src="./assets/search-normal.svg" alt="icon" /></div>
        </div>
    )
}