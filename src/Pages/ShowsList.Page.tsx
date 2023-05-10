import { FC } from "react";
import { showQueryChangeAction } from "../actions/Showsaction";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { connect, ConnectedProps } from "react-redux";
import { loadingSelector, showsQuerySelector, showsSelector } from "../selectors/ShowsSelector";
import { State } from "../store";
import Loading from "../Loading";

type showListPAgeProps = ReduxProps;

const ShowListPage: FC<showListPAgeProps> = ({ query, shows, queryChange, loading }) => {
  console.log("shows", shows);
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-center text-xl">Search your favourite tv shows...</h1>
        <div className="flex flex-col"><SearchBar value={query} onChange={(event) => { queryChange(event.target.value); }} />
          {loading && <Loading />}
        </div>
        <div className="flex flex-wrap justify-center">
          {shows && shows.map((s: any) => (
            <ShowCard key={s.id} show={s?.show} cast={s.cast}></ShowCard>
          ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: State) => {
  return { query: showsQuerySelector(state), shows: showsSelector(state), loading: loadingSelector(state) }
}

const mapDispatchToProps = {
  queryChange: showQueryChangeAction,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(ShowListPage);