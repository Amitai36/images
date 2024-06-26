import ProviderTheme from "./styles/ProviderTheme";
import SearchToDisplay from "./pages/searchToDisplay";
import { Route, Routes } from "react-router-dom";
import UseMap from "./components/UseMap";
import PhotoStatistics from "./pages/statistics/PhotoStatistics";
import UserStatistics from "./pages/statistics/UserStatistics";
import UserPhotos from "./pages/UserPhotos";
import MainBar from "./pages/MainBar";
import DisplaySearchRes from "./pages/DisplaySearchRes";

function App() {
  return (
    <ProviderTheme>
      <MainBar />
      <div style={{ maxHeight: "90%", height: "90%" }}>
        <Routes>
          <Route path="/" element={<SearchToDisplay />} />
          <Route path="/search" element={<DisplaySearchRes />} />
          <Route
            path="/search/photoStatistics/:photoId"
            element={<PhotoStatistics />}
          />
          <Route path="/map" element={<UseMap />} />
          <Route path="/userPhotos/:name" element={<UserPhotos />} />
          <Route path="/userStatistics/:name" element={<UserStatistics />} />
        </Routes>
      </div>
    </ProviderTheme>
  );
}

export default App;
