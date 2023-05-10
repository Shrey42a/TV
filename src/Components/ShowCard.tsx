import { Link } from "react-router-dom";
import { FC, useState } from "react";
import { Show } from "../models/show";
import { Avatar, AvatarGroup } from "@mui/material";
import CastAvatars from "./CastAvatars"
import { Cast } from "../models/casts";

type ShowCardProps = {
  show: Show;
  cast: { id: number, cast: Cast[] };
}

const placeholderimage = "https://images.unsplash.com/photo-1556888335-95371827d5fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"

const ShowCard: FC<ShowCardProps> = ({ show, cast }) => {
  const [avtarShow, setAvtarShow] = useState(false);
  return (
    <>
      <div className="max-w-xs glass4 h-1/2 shadow-md p-2 m-1">
        <div className="bx rounded-lg overflow-hidden h-72 w-full">
          <img
            src={show?.image?.medium || placeholderimage}
            alt=""
            className="object-cover shadow-lg shadow-zinc-900 object-center w-full rounded-lg hover:scale-95 transition ease-in-out h-full"
          />
        </div>
        <div className="flex flex-col justify-between p-2 space-y-2">
          <div className="space-y-2 overflow-y-scroll h-44">
            <h2 className="text-3xl font-semibold tracking-wide">{show?.name}</h2>
            <p>{show?.summary}</p>
          </div>
          <div className="h-16 flex-col bg-white/10 rounded-lg flex items-center justify-center">
            <AvatarGroup
              className="cursor-pointer"
              max={4}
              total={cast?.cast?.length}
              onClick={() => setAvtarShow(!avtarShow)}
            >
              {cast?.cast?.map((p: Cast) => {
                return <Avatar className="hover:scale-110 hover:z-50 outline-0 hover:transition hover:ease-in-out hover:duration-800 grayscale hover:grayscale-0 cursor-default shadow-md shadow-zinc-900" key={p.id} alt="" src={p.image?.medium} />;
              })}
            </AvatarGroup>
            {avtarShow && (<div className="absolute h-1/2 top-44 overflow-y-scroll left-12 px-2 py-4 z-10">
              <CastAvatars persons={cast.cast}
              />
            </div>
            )}
          </div>
          <Link to={"/show/" + show?.id} className="flex justify-center items-center">
            <button className="custom-btn btn px-4 py-2">View Details</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShowCard;
