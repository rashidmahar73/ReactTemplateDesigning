import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomeComponent=lazy(()=>import("../Components/DesigningCompoenents/HomeComponent.js"))
const App = lazy(() => import("../App.js"));
const AboutRender = lazy(() => import("../RouterComponents/AboutRender.js"));
const ExperiencesRender = lazy(() =>
  import("../RouterComponents/Experiences.js")
);
const ServicesRender = lazy(() =>
  import("../RouterComponents/ServicesRender.js")
);
const ProjectsRender = lazy(() =>
  import("../RouterComponents/ProjectsRender.js")
);
const ContactRender = lazy(() =>
  import("../RouterComponents/ContactRender.js")
);
const Map = lazy(() => import("../RouterComponents/Map.js"));

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeComponent/>,
    },
    {
      path: "/about",
      element: <AboutRender/>,
    },
    {
      path: "/experiences",
      element: <ExperiencesRender/>,
    },
    {
      path: "/services",
      element: <ServicesRender/>,
    },
    {
      path: "/projects",
      element: <ProjectsRender/>,
    },
    {
      path: "/contact",
      element: <ContactRender/>,
    },
    {
      path: "/map",
      element: <Map/>,
    },
  ]);
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};
export default Router;

// import { createBrowserRouter } from "react-router-dom";
// // // import { RouterProvider } from "react-router-dom";
// // // import { AboutRender } from "../RouterComponents/AboutRender.js";
// // // import { AboutRender } from "../RouterComponents/AboutRender.js";
// // // import { ExperiencesRender } from "./RouterComponents/Experiences.js";
// // // import { ProjectsRender } from "./RouterComponents/ProjectsRender.js";
// // // import { ServicesRender } from "./RouterComponents/ServicesRender.js";
// // // import { ContactRender } from "./RouterComponents/ContactRender.js";
// // import { Map } from "./RouterComponents/Map.js";
//  const router = createBrowserRouter([
//     {
//       path: "*",
//       element: <App />,
//     },
// //     // {
// //     //   path: "/about",
// //     //   element: <AboutRender />,
// //     // },
// //     // {
// //     //   path: "/experiences",
// //     //   element: <ExperiencesRender />,
// //     // },
// //     // {
// //     //   path: "/services",
// //     //   element: <ServicesRender />,
// //     // },
// //     // {
// //     //   path: "/projects",
// //     //   element: <ProjectsRender />,
// //     // },
// //     // {
// //     //   path: "/contact",
// //     //   element: <ContactRender />,
// //     // },
// //     // {
// //     //   path: "/map",
// //     //   element: <Map />,
// //     // },
//   ]);
//   export default router;
