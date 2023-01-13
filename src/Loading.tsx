import { FC } from "react";

type LoadingProps = {};

const Loading: FC<LoadingProps> = () => {
    return (
        <>
            <div className="bdy mt-10">
                <div className="loading">
                    <div className="circle cyan"></div>
                    <div className="circle magenta"></div>
                    <div className="circle yellow"></div>
                    <p>Connecting...</p>
                </div>
            </div>
        </>
    );
}
export default Loading;