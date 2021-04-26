import { lazy } from "react";

const routeList = [
    {
        path: "/",
        component: lazy(() => import("../pages/home")),
        role: ["GUEST"],
    },
    {
        path: "/404",
        component: lazy(() => import("../pages/error-pages/page-not-found")),
        role: ["USER", "GUEST"],
    },
];

export default routeList;
