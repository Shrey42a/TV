import { Link } from "react-router-dom";
import { FC } from "react";
import { Show } from "../models/show";

type ShowCardProps = {
  show: Show;
}

const placeholderimage = "https://images.unsplash.com/photo-1556888335-95371827d5fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"


const ShowCard: FC<ShowCardProps> = ({ show }) => {
  return (
    <div className="max-w-xs glass4 h-1/2 shadow-md p-2 m-1">
      <div className="bx rounded-lg overflow-hidden h-72 w-full">
        <img
          src={show.image?.medium || placeholderimage}
          alt=""
          className="object-cover object-center w-full rounded-lg hover:scale-95 transition ease-in-out h-full"
        />
      </div>
      <div className="flex flex-col justify-between p-2 space-y-4">
        <div className="space-y-2 h-full overflow-y-scroll h-44">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p>{show.summary}</p>
        </div>
        <Link to={"/show/" + show.id} className="flex justify-center items-center">
          <button className="custom-btn btn px-4 py-2">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
