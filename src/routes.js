import Home from "./Screen/Home/Home";
import Courses from "./Components/Courses/Courses";

export const routes = [
    {
        path:"/",
        exact: true,
        main : ({history}) =><Home history = {history}/>
    },
    {
        path: "/courses",
        exact: true,
        main: ({history, match}) => <Courses history={history} match={match}/>
    },
]