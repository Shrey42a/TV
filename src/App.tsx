import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ShowDetailPage from "./Pages/ShowDetails.Page";
import ShowListPage from "./Pages/ShowsList.Page";

function App() {
  return (
    <>
      <div className="bg-cover bg-fixed bg-[url(https://images.wallpaperscraft.com/image/single/windmills_fog_field_134721_3840x2400.jpg)]">
        <Header />
        <div className="w-full min-h-screen max-h-max px-8 py-4">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ShowListPage />} />
              <Route path="show/:showId" element={<ShowDetailPage cast={[]} showIdChange={function (id: number): void {
                throw new Error("Function not implemented.");
              }} />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
