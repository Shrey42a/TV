import { BsSearch } from "react-icons/bs";
import { FC, InputHTMLAttributes } from "react";

type searchbarprops = InputHTMLAttributes<HTMLInputElement>

const SearchBar: FC<searchbarprops> = (props) => {
  return (
    <div className="relative">
      <div className=" shadow-md shadow-zinc-600 rounded-full">
        <input {...props} className="px-4 bx py-2 w-full bg-white/30 rounded-full border-2 border-white/10 outline-none" type="text" placeholder="Search" />
      </div>
      <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SearchBar;
