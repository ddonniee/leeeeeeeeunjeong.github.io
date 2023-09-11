import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

import routes from "./routes";
import NotFound from "./views/Error/NotFound";

function App() {

  return (
   <>
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
    {/* <BrowserRouter> */}
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={<route.element />}
            />
          ))}
           <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
