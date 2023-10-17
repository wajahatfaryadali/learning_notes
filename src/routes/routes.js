import Database from "../views/Database/Database";
import Home from "../views/Home/Home";
import Javascript from "../views/Javascript/Javascript";
import Node from "../views/NodeJs/Node";
import ReactJs from "../views/ReactJs/ReactJs";

export const routes = [
    {
        title: "Home",
        path: "/",
        component: <Home />,
        navOrder: 1
    },
    {
        title: "Javascript",
        path: "/javascript",
        component: <Javascript />,
        navOrder: 2
    },
    {
        title: "React JS",
        path: "/react-js",
        component: <ReactJs />,
        navOrder: 3
    },
    {
        title: "Database",
        path: "/database",
        component: <Database />,
        navOrder: 4
    },
    {
        title: "Node Js",
        path: "/node-js",
        component: <Node />,
        navOrder: 5
    },

]