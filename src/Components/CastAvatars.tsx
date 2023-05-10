import { Avatar, Divider } from "@mui/material";
import { FC } from "react";
import { Cast } from "../models/casts";

type CastDropDownProps = {
    className?: string;
    persons?: Cast[];
};

const CastDropDown: FC<CastDropDownProps> = ({ className, persons }) => {
    return (
        <div
            className={
                "md:w-52 w-32 bg-black/60 backdrop-blur saturate-100 py-2 shadow-lg shadow-black rounded-lg space-x-1 z-50  p-1" +
                className
            }
        >
            {persons?.map((p) => {
                return (
                    <div
                        key={p.id}
                        className="flex items-center justify-between md:px-4 md:py-0.5 border-b-2 border-gray-500 "
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src={p.image?.medium}
                            sx={{ width: 28, height: 28 }}
                        />
                        <p className="text-base truncate text-white font-bold"> {p.name} </p>
                        <Divider />
                    </div>
                );
            })}
        </div>
    );
};

export default CastDropDown;
