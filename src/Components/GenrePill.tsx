import { memo } from "react";

const GenrePill = ({ name }: { name: string }) => {
  return <p className="font-thin text-black/70 text-sm">{name}</p>;
};

export default memo(GenrePill);
