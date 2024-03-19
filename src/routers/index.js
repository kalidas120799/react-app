import { createBrowserRouter } from "react-router-dom";
import { Home, Page1, Page2, Page3, PNF } from "../pages";
import { Layout1, Layout2 } from "../layouts"

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout1 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "page",
                element: <Layout2 />,
                children: [
                    {
                        index: true,
                        element: <Page1 />
                    },
                    {
                        path: "2",
                        element: <Page2 />
                    },
                    {
                        path: "3",
                        element: <Page3 />
                    },
                ]
            },
            {
                path: "page3",
                element: <Layout2 />,
                children: [
                    {
                        index: true,
                        element: <Page3 />
                    },
                ]
            }
        ]
    },
    {
        path: "/*",
        element: <PNF />,
    }
]);