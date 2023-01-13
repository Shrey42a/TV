import React from "react";

function Header() {
    return (
        <>
            <div className="h-16 w-full glass overflow-hidden shadow-sm shadow-zinc-700">
                <nav className="h-full w-full lg:px-2 glass3 flex items-center justify-between">
                    <div className="lg:px-4 h-36 w-36 lg:h-44 lg:w-44 px-1"><img src="42.png" className="mt-3.5 w-full h-full cursor-pointer hover:scale-110 transition ease-in-out"></img></div>
                    <div className="flex space-x-4 lg:space-x-4 px-2 lg:px-4">
                        <h1 className="hover:scale-110 hover:border-b-2 border-lime-400 hover:font-semibold hover:transition hover:ease-in-out cursor-pointer">Home</h1>
                        <h1 className="hover:scale-110 hover:border-b-2 border-lime-400 hover:font-semibold hover:transition hover:ease-in-out cursor-pointer">About</h1>
                        <h1 className="hover:scale-110 hover:border-b-2 border-lime-400 hover:font-semibold hover:transition hover:ease-in-out cursor-pointer">Contact</h1>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Header;