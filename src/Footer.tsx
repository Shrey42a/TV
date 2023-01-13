import React from "react";

function Footer() {
    return (
        <>
            <div className="h-max w-full glass py-2">
                <ul className="flex w-full flex-col items-center justify-center space-y-4 py-4 lg:flex-row lg:space-x-10 lg:space-y-0">
                    <li className="text-sm font-bold uppercase text-black/90 transition ease-in-out hover:text-sky-400"><a href="#home">Home</a></li>
                    <li className="text-sm font-bold uppercase text-black/90 transition ease-in-out hover:text-sky-400"><a href="#About us">About Us</a></li>
                    <li className="text-sm font-bold uppercase text-black/90 transition ease-in-out hover:text-sky-400"><a href="#PP">Privacy Policy</a></li>
                    <li className="text-sm font-bold uppercase text-black/90 transition ease-in-out hover:text-sky-400"><a href="COntact us">Contact us</a></li>
                </ul>

                <div className="flex flex-col py-4">
                    <h1 className="text-center text-2xl font-semibold text-black/70">Download The App</h1>
                    <div className="flex flex-row items-center justify-center space-x-4 py-2">
                        <div className="flex space-x-1 rounded-md bg-white/10 p-2 text-white/40 shadow-inner shadow-slate-400 saturate-150 backdrop-blur-md hover:shadow-teal-700">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                                <defs>
                                    <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="139644" y1="1216.54" x2="139644" y2="154838">
                                        <stop offset="0" stopColor="#0ad778" />
                                        <stop offset="1" stopColor="#01ef75" />
                                    </linearGradient>
                                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="131794" y1="175885" x2="131794" y2="314014">
                                        <stop offset="0" stopColor="#fe3e4a" />
                                        <stop offset="1" stopColor="#e31f50" />
                                    </linearGradient>
                                    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="203724" y1="166762" x2="301448" y2="166762">
                                        <stop offset="0" stopColor="#febe00" />
                                        <stop offset="1" stopColor="#ffd900" />
                                    </linearGradient>
                                    <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="101563" y1="73139" x2="101563" y2="250453">
                                        <stop offset="0" stopColor="#02c4ff" />
                                        <stop offset="1" stopColor="#01e2ff" />
                                    </linearGradient>
                                </defs>
                                <path d="M239294 224715L61656 327719c-5862 3400-8711 4828-15749 5612-1462 163-20263-7299-21614-7313l162266-169613 52735 68309v1z" fill="url(#a)" />
                                <path d="M239323 108780l51810 29915c7151 4128 13345 7157 18724 13758 8759 10753 7617 23077-5003 33454-5577 4586-13106 8393-19403 12044l-46300 26791-52595-68339 52767-47624z" fill="url(#b)" />
                                <path d="M39911 57c300-19 602-32 905-41 12993-368 19780 5461 30426 11735l168136 97065-52820 47588L39912 55v2z" fill="url(#c)" />
                                <path d="M41278 518l145281 155887L24334 325975c-1040-1232-1950-2595-2736-4072-5033-9475-3621-24057-3621-34750V44552c0-7160-533-15777 646-23242C20279 10832 35301-2382 41277 519z" fill="url(#d)" /></svg
                            ><a className="text-black/70" href="#googleplay">Google Play</a>
                        </div>
                        <div className="flex space-x-1 rounded-md bg-white/10 p-2 text-white/40 shadow-inner shadow-slate-400 saturate-150 backdrop-blur-md hover:shadow-teal-700">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="64" height="64" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="gray" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z" /></svg><a className="text-black/70" href="#Appstore">App Store</a>
                        </div>
                    </div>
                </div>
                <h1 className="text-md text-center font-semibold text-black/70">Made With 42 At <a target="blank" href="https://codeyogi.io/" title="Visit Codeyogi" className="text-cyan-500 cursor-pointer">Codeyogi Labs</a></h1>
                <div className="flex flex-col items-center justify-center space-y-2 py-4">
                    <h1 className="text-center text-black/70">
                        Copyright &#169; 2022 <span className="text-cyan-500"><a href="#home">Four2 Flix</a></span> BIS
                    </h1>
                    <p className="text-center text-black/70">Every item on this website has been made with very hard work.If you copy anything we will hunt you down.</p>
                </div>
            </div>
        </>
    );
}
export default Footer;