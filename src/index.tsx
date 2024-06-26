import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import { About } from './features/About/About';
import Movies from './features/Movies/Movies';
import store from './store';
import Home from './features/Home/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function AppEntrypoint() {
  return (
    <Provider store={store}>
        <App />
      </Provider>
  )
}

const router = createBrowserRouter([
  {
    path: "/my-app",
    element:
      <AppEntrypoint />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
