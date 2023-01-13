import { FC, memo } from "react";
import Loading from "../Loading";
import { Cast } from "../models/casts";

type CastCardProps = {
  cast: Cast;
}

const placeholderImage =
  "https://as1.ftcdn.net/v2/jpg/02/48/42/64/1000_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";


const CastCard: FC<CastCardProps> = ({ cast }) => {

  if (!cast) {
    return <><Loading /></>
  }

  return (
    <div className="flex h-48 rounded-md w-48 flex-col">
      <img className="h-full rounded-md w-full" src={cast.image?.medium || cast.image?.original || placeholderImage} />
      <h1 className="text-center">{cast.name}</h1>
    </div>
  );
};

export default memo(CastCard);

