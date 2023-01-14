import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { loadedShowAction } from "../actions/Showsaction";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import Loading from "../Loading";
import { Cast } from "../models/casts";
import { CastSelector } from "../selectors/CastSelector";
import { showsMapSelector } from "../selectors/ShowsSelector";
import { State } from "../store";

type OwnProps = { cast: Cast[]; showIdChange: (id: number) => void; } & WithRouterProps;

type ShowDetailPageProps = ReduxProps & OwnProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params, show, cast, showIdChange }) => {
  console.log("id", params.showId);
  console.log("cast", cast);

  const id = +params.showId;
  useEffect(() => {
    showIdChange(id);
  }, [id]);

  if (!show) {
    return <><Loading /></>
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row h-max w-full">
        <div className="ml-2 lg:ml-10  mt-1">
          <Link title="go back" className="btn2" to="/"><svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M280.88 156.92a9.788 9.788 0 0 1 13.92-.12c3.87 3.85 3.92 10.15.11 14.06l-83.71 86.31 83.63 83.89c3.86 3.87 3.87 10.16.04 14.06a9.778 9.778 0 0 1-13.92.04l-90.56-90.85c-3.83-3.85-3.87-10.12-.07-14.02l90.56-93.37z" /><path d="M0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.7-28.65 134.7-74.98 181.02C390.7 483.35 326.7 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256zM89.08 89.08C46.37 131.8 19.94 190.81 19.94 256c0 65.19 26.42 124.21 69.14 166.92 42.72 42.71 101.73 69.14 166.92 69.14 65.19 0 124.21-26.42 166.92-69.14 42.72-42.71 69.14-101.73 69.14-166.92 0-65.19-26.43-124.2-69.14-166.92C380.21 46.36 321.19 19.94 256 19.94c-65.19 0-124.2 26.43-166.92 69.14z" /></g></svg></Link>
        </div>
        <div className="flex h-max w-full flex-col items-center space-y-1 p-2 py-1">
          <div className="w-full flex flex-col bg-white/30 rounded-md p-2 lg:w-4/5">
            <h1 className="font-semibold text-lg uppercase text-gray-600">{show.name}</h1>
            <div className="flex space-x-1">
              {show.genres.map((genere: string) => (
                <GenrePill name={genere} key={genere} />
              ))}
            </div>
          </div>
          <div className="flex rounded-md h-4/5 w-full flex-col bg-white/20 glass2 p-2 lg:h-3/5 lg:w-4/5 lg:flex-row lg:space-x-4">
            <img className="h-64 rounded-md w-full lg:h-72 lg:w-1/3" src={show.image?.medium || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} />
            <div className="flex flex-col lg:h-72 overflow-y-scroll px-2 space-y-2 lg:w-1/2">
              <p className="text-thin text-justify lg:text-2xl">{show.summary}</p>
              <h1 className="w-16 rounded bg-lime-200 p-2 text-center font-bold">{show.rating.average}/10</h1>
            </div>
          </div>
          <div className="w-full rounded-md bg-white/30 p-2 lg:w-4/5">
            <h1 className="font-semibold uppercase text-gray-600">Cast</h1>
          </div>
          <div className="flex h-max py-6 gap-6 w-full glass2 rounded-md flex-wrap lg:justify-between justify-center bg-white/20 px-6 lg:w-4/5">
            {cast.map((a) => (
              <CastCard cast={a}></CastCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  return { show: showsMapSelector(state)[+ownProps.params.showId], cast: CastSelector(state) };
};

const mapDispatchToProps = {
  showIdChange: loadedShowAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetailPage));


//https://play.tailwindcss.com/2QUkndF1K8