import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { FizjoterapiaOrtopedyczna } from "./views/FizjoterapiaOrtopedyczna/FizjoterapiaOrtopedyczna.jsx";
import { IntegracjaSensoryczna } from "./views/IntegracjaSensoryczna/IntegracjaSensoryczna.jsx";
import { FizjoterapiaDzieciIMlodzierzy } from "./views/FizjoterapiaDzieciIMlodzierzy/FizjoterapiaDzieciIMlodzierzy.jsx";
import { Kontakt } from "./views/Kontakt/Kontakt.jsx";
import { OurTeam } from "./views/OurTeam/OurTeam.jsx";
import { PawelZerdzinski } from "./views/PawelZerdzinski/PawelZerdzinski.jsx";
import { UrszulaGawlik } from "./views/UrszulaGawlik/UrszulaGawlik.jsx";
import { MalgorzataZerdzinska } from "./views/MalgorzataZerdzinska/MalgorzataZerdzinska.jsx";
import { MartaMisiejuk } from "./views/MartaMisiejuk/MartaMisiejuk.jsx";
import { Cennik } from "./views/Cennik/Cennik.jsx";
import { Masaz } from "./views/Masaz/Masaz.jsx";
import { KonsultacjaSI } from "./views/KonsultacjaSI/KonsultacjaSI.jsx";

const router = createBrowserRouter([
  {
    path: "/fizjoterpia-ortopedyczna",
    element: <FizjoterapiaOrtopedyczna />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/integracja-sensoryczna",
    element: <IntegracjaSensoryczna />,
  },
  {
    path: "/integracja-sensoryczna/konsultacja-si",
    element: <KonsultacjaSI />,
  },
  {
    path: "/fizjoterapia-dzieci-i-mlodziezy",
    element: <FizjoterapiaDzieciIMlodzierzy />,
  },
  {
    path: "/kontakt",
    element: <Kontakt />,
  },
  {
    path: "/nasz-zespol",
    element: <OurTeam />,
  },
  {
    path: "/nasz-zespol/pawel-zerdzinski",
    element: <PawelZerdzinski />,
  },
  {
    path: "/nasz-zespol/urszula-gawlik",
    element: <UrszulaGawlik />,
  },
  {
    path: "/nasz-zespol/malgorzata-zerdzinska",
    element: <MalgorzataZerdzinska />,
  },
  {
    path: "/nasz-zespol/marta-misiejuk",
    element: <MartaMisiejuk />,
  },

  {
    path: "/cennik",
    element: <Cennik />,
  },

  {
    path: "/masaz",
    element: <Masaz />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
