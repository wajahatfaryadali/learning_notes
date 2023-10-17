import React from "react";
import { routes } from "./routes/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNavBar from "./components/navbar/TopNavBar";
import PageNotFound from "./views/PageNotFound";

function App() {

  const allRoutes = routes.sort((a, b) => a.navOrder - b.navOrder)
  console.log("routes *** ", allRoutes)

  return (
    <div >
      <BrowserRouter>
        <TopNavBar routes={allRoutes} />
        <Routes>
          {allRoutes?.map((e, i) =>
            <Route key={i} path={e.path} element={e.component} />
          )}
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
