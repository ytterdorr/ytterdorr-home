import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import STCatalog from './STCatalog';
import Endings from './STCatalog/Endings';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Views/ErrorPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AdminRoutes } from './STCatalog/STRoutes';
import ReactStrapTutorial from './ReactStrapTutorial';
import AdminRoutes from './STCatalog/AdminRoutes';

const NoMatch = () => {
  return (<div>No Match</div>)
}

// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// )

// root.render(

// )

// const AdminRoutes = () => (
//   <Routes>
//     <Route path="countries" element="countries" />
//     <Route path="tournaments" element="Tournaments" />
//     <Route path="*" element="Admin" />
//   </Routes>
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />} />
        <Route path="/ReactStrapTutorial" element={<ReactStrapTutorial />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/STCatalog" element={<STCatalog />} errorElement={<ErrorPage />}>
          <Route path="Start" element={<div>Maybe a list</div>} />
          <Route path="Endings" element={<Endings />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch></NoMatch>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
