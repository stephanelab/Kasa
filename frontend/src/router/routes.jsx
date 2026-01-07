import Home from "../pages/Home"
import FicheLogement from "../pages/Fiche_Logement"
import About from "../pages/A-Propos"
import Error404 from "../pages/404"
import MainLayout from "../layout/MainLayout"

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "logement/:id",
        element: <FicheLogement />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]

export default routes
