
import { MainAppLayout } from 'Layout/MainAppLayout';
import  { lazy } from 'react'

const Home = lazy(() => import("./pages/HomePage/HomePage"))
const Planning = lazy(() => import("./pages/Planning/Planning"))
const Designing = lazy(() => import("./pages/Designing/Designing"))
const Manufacturing = lazy(() => import("./pages/Manufacturing/Manufacturing"))
const Sales = lazy(() => import("./pages/Sales/Sales"))
const B2c = lazy(() => import("./pages/B2c/B2c"))

const routes = [
    {
        path: "/research",
        component: Home,
        exact: true,
        auth: false,
        layout: MainAppLayout,
    },
    {
        path: "/planning",
        component: Planning,
        exact: true,
        auth: false,
        layout: MainAppLayout,
    },
    {
        path: "/designing",
        component: Designing,
        exact: true,
        auth: false,
        layout: MainAppLayout,
    },
    {
        path: "/manufacturing",
        component: Manufacturing,
        exact: true,
        auth: false,
        layout: MainAppLayout,
    },
    {
        path: "/sales",
        component: Sales,
        exact: true,
        auth: false,
        layout: MainAppLayout,
    },
    {
        path: "/research/b2c",
        component: B2c,
        exact: true,
        auth: false,
        layout: MainAppLayout,
    },
];

export default routes